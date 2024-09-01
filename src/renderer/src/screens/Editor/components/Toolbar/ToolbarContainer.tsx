import { useContext } from "react";

import Toolbar, { TextAlignment } from "./Toolbar";

import EditorContext from "../../context";

import { useBulletList, usePrint, useTextAlign, useTextFormat } from "./hooks";

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

  const { setAlignment, currentAlignment } = useTextAlign(editor!);

  const handleBulletListToggle = useBulletList(editor!);

  return (
    <Toolbar
      document={document}
      currentAlignment={currentAlignment as TextAlignment}
      onDelete={() => {}}
      onExport={() => {}}
      onPrint={handlePrint}
      currentColor={currentColor}
      onMoreInfo={() => {}}
      onChangeFont={handleFontChange}
      onChangeColor={handleColorChange}
      onTextAlignChange={setAlignment}
      onHeadingChange={handleHeadingChange}
      onFormatBold={handleFormatBold}
      onFormatItalic={handleFormatItalic}
      onFormatUnderline={handleUnderline}
      onBulletListToggle={handleBulletListToggle}
    />
  );
}
