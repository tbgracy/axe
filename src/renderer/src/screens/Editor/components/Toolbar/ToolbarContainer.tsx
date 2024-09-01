import { useContext } from "react";

import Toolbar, { TextAlignment } from "./Toolbar";

import EditorContext from "../../context";

import {
  useBulletList,
  usePrint,
  useTextAlignment,
  useTextFormat,
} from "./hooks";

export function ToolbarContainer({ document }: { document: TextDocument }) {
  const editor = useContext(EditorContext);

  const { handlePrint } = usePrint(editor!);

  const {
    isBold,
    isItalic,
    isUnderlined,
    currentLevel,
    handleFormatBold,
    handleFormatItalic,
    handleUnderline,
    handleFontChange,
    handleColorChange,
    handleHeadingChange,
  } = useTextFormat(editor!);
  const currentColor = editor?.getAttributes("textStyle").color;

  const { setAlignment, currentAlignment } = useTextAlignment(editor!);

  const { toggleBulletList, isBulletList } = useBulletList(editor!);

  return (
    <Toolbar
      document={document}
      isBold={isBold}
      isItalic={isItalic}
      isUnderlined={isUnderlined}
      isBulletList={isBulletList}
      currentAlignment={currentAlignment as TextAlignment}
      currentLevel={currentLevel}
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
      onBulletListToggle={toggleBulletList}
    />
  );
}
