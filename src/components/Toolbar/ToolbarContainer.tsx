import { useContext } from "react";

import EditorContext from "../../screens/Editor/context";

import Toolbar from "./Toolbar";

import { useBulletList, usePrint, useTextAlign, useTextFormat } from "./hooks";

import { TextDocument } from "../../types";

export function ToolbarContainer({ document }: { document: TextDocument }) {
  const editor = useContext(EditorContext);

  const { handlePrint } = usePrint(editor!);

  const {
    handleFormatBold,
    handleFormatItalic,
    handleUnderline,
    handleFontChange,
    handleColorChange,
    handleHeadingChange,
  } = useTextFormat(editor!);
  const currentColor = editor?.getAttributes("textStyle").color;

  const handleTextAlign = useTextAlign(editor!);

  const handleBulletListToggle = useBulletList(editor!);

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
      onTextAlignChange={handleTextAlign}
      onHeadingChange={handleHeadingChange}
      onFormatBold={handleFormatBold}
      onFormatItalic={handleFormatItalic}
      onFormatUnderline={handleUnderline}
      onBulletListToggle={handleBulletListToggle}
    />
  );
}
