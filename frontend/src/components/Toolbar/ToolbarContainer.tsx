import { useContext } from "react";

import EditorContext from "../../screens/Editor/context";

import Toolbar from "./Toolbar";

import { usePrint, useTextFormat } from "./hooks";

import { TextDocument } from "../../types";

export function ToolbarContainer({ document }: { document: TextDocument }) {
  const editor = useContext(EditorContext);

  const { handlePrint } = usePrint();
  const {
    handleFormatBold,
    handleFormatItalic,
    handleUnderline,
    handleFontChange,
    handleColorChange,
  } = useTextFormat(editor!);
  const currentColor = editor?.getAttributes("textStyle").color;

  return (
    <Toolbar
      document={document}
      onDelete={() => {}}
      onShare={() => {}}
      onExport={() => {}}
      onPrint={handlePrint}
      currentColor={currentColor}
      onMoreInfo={() => {}}
      onChangeFont={handleFontChange}
      onChangeColor={handleColorChange}
      onFormatBold={handleFormatBold}
      onFormatItalic={handleFormatItalic}
      onFormatUnderline={handleUnderline}
    />
  );
}
