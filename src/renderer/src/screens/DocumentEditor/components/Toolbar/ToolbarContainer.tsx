import Toolbar, { TextAlignment } from "./Toolbar";

import {
  useBulletList,
  usePrint,
  useTextAlignment,
  useTextFormat,
} from "../../hooks";

export function ToolbarContainer({ document }: { document: TextDocument }) {
  const handlePrint = usePrint();

  const {
    isBold,
    isItalic,
    isUnderlined,
    currentLevel,
    currentColor,
    handleFormatBold,
    handleFormatItalic,
    handleUnderline,
    handleFontChange,
    handleColorChange,
    handleHeadingChange,
  } = useTextFormat();

  const { setAlignment, currentAlignment } = useTextAlignment();

  const { toggleBulletList, isBulletList } = useBulletList();

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
