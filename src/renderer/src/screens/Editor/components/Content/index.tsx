import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Slate,
  Editable,
  withReact,
  ReactEditor,
  RenderLeafProps,
  RenderElementProps,
} from "slate-react";
import { HistoryEditor } from "slate-history";
import {
  BaseEditor,
  Descendant,
  Editor,
  Transforms,
  createEditor,
} from "slate";
import * as Y from "yjs";
import { withYjs, YjsEditor, withYHistory } from "@slate-yjs/core";
import { WebsocketProvider } from "y-websocket";

import Sheet from "../Sheet";
import Header from "../Header";
import Statusbar from "../Statusbar";

import Leaf from "./Leaf";
import Element from "./Element";

import { useAppSelector } from "@renderer/app/hooks";
import LoadingAnimation from "@renderer/components/LoadingAnimation";

export type FormatType = "bold" | "italic" | "underline";

type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
};

type CustomElement = { type: "paragraph"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

export default function Content({ document }: { document: TextDocument }) {
  const [connected, setConnected] = useState(false);
  const [sharedType, setSharedType] = useState<Y.XmlText>();
  const [provider, setProvider] = useState<WebsocketProvider>();

  const hostUrl = useAppSelector((state) => state.role.hostUrl);

  useEffect(() => {
    const yDoc = new Y.Doc();
    const sharedDoc = yDoc.get("slate", Y.XmlText);
    const yProvider = new WebsocketProvider(
      hostUrl!.replace("http", "ws").replace("3000", "1234"),
      document.id,
      yDoc
    );

    yProvider.on("sync", setConnected);
    setSharedType(sharedDoc);
    setProvider(yProvider);

    return () => {
      yDoc.destroy();
      yProvider.off("sync", setConnected);
      yProvider.destroy();
    };
  }, []);

  if (!connected || !sharedType || !provider) {
    return <LoadingAnimation />;
  }

  return <RealEditor sharedType={sharedType} document={document} />;
}

function RealEditor({
  sharedType,
  document,
}: {
  sharedType: Y.XmlText;
  document: TextDocument;
}) {
  let initialValue: Descendant[];

  try {
    initialValue = JSON.parse(document.content);
  } catch {
    initialValue = [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ];
  }
  const editor = useMemo(() => {
    const e = withReact(withYHistory(withYjs(createEditor(), sharedType)));

    const { normalizeNode } = e;
    e.normalizeNode = (entry) => {
      const [node] = entry;
      if (!Editor.isEditor(node) || node.children.length > 0) {
        return normalizeNode(entry);
      }
      Transforms.insertNodes(editor, initialValue, { at: [0] });
    };

    return e;
  }, []);

  useEffect(() => {
    YjsEditor.connect(editor);
    return () => YjsEditor.disconnect(editor);
  }, [editor]);
  
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <div className="flex flex-col bg-gray-200 items-center h-[100vh] w-full">
        <Header document={document!} users={[]} />
        <div className="flex-grow overflow-scroll w-full py-4">
          <Sheet document={document!} onClick={() => ReactEditor.focus(editor)}>
            <Editable
              className="h-full"
              renderLeaf={renderLeaf}
              renderElement={renderElement}
            />
          </Sheet>
        </div>
        <Statusbar wordCount={editor.string.length} />
      </div>
    </Slate>
  );
}
