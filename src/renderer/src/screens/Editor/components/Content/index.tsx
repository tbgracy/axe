import { useCallback, useState } from "react";
import {
  Slate,
  Editable,
  withReact,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import { BaseEditor, Descendant, createEditor } from "slate";
import { withHistory, HistoryEditor } from "slate-history";

import Sheet from "../Sheet";
import Header from "../Header";
import Statusbar from "../Statusbar";

import Leaf from "./Leaf";
import Element from "./Element";

import { useHotKeys } from "../../hooks";

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
  const [editor] = useState(() => withReact(withHistory(createEditor())));
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
              onKeyDown={(e) => {
                const handleHotKeys = useHotKeys();
                handleHotKeys(e);
              }}
            />
          </Sheet>
        </div>
        <Statusbar wordCount={editor.string.length} />
      </div>
    </Slate>
  );
}
