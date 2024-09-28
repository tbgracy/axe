import {
  Slate,
  Editable,
  ReactEditor,
  RenderLeafProps,
  RenderElementProps,
} from "slate-react";
import * as Y from "yjs";
import { BaseEditor } from "slate";
import { useCallback } from "react";
import { HistoryEditor } from "slate-history";

import Sheet from "../Sheet";
import Header from "../Header";
import Statusbar from "../Statusbar";

import Leaf from "./Leaf";
import Element from "./Element";

import { useAppSelector } from "@renderer/app/hooks";
import LoadingAnimation from "@renderer/components/LoadingAnimation";
import { useCollaboration, useEditor } from "./hooks";

export default function EditorContainer({
  document,
}: {
  document: TextDocument;
}) {
  const hostUrl = useAppSelector((state) => state.role.hostUrl);

  const { connected, sharedType, provider } = useCollaboration(
    hostUrl!,
    document.id
  );

  if (!connected || !sharedType || !provider) {
    return <LoadingAnimation />;
  }

  return <EditorComponent sharedType={sharedType} document={document} />;
}

function EditorComponent({
  sharedType,
  document,
}: {
  sharedType: Y.XmlText;
  document: TextDocument;
}) {
  const { editor, initialValue } = useEditor(sharedType, document.content);

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
