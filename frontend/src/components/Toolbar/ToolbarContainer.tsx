import { TextDocument } from "../../types";
import Toolbar from "./Toolbar";
import { usePrint, useTextFormat } from "./hooks";

export function ToolbarContainer({ document }: { document: TextDocument }) {
  const { handlePrint } = usePrint();
  const { formatBold, formatItalic, formatUnderline } = useTextFormat();

  return (
    <Toolbar
      document={document}
      onDelete={() => {}}
      onShare={() => {}}
      onExport={() => {}}
      onPrint={handlePrint}
      onMoreInfo={() => {}}
      onChangeFont={() => {}}
      onFormatBold={formatBold}
      onFormatItalic={formatItalic}
      onFormatUnderline={formatUnderline}
    />
  );
}
