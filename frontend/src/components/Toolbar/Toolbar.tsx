import {
  AddLink,
  DocumentScanner,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatColorText,
  FormatItalic,
  FormatListBulleted,
  FormatUnderlined,
  Image,
  MoreVert,
  ScreenRotation,
  Search,
  TableChartOutlined,
} from "@mui/icons-material";

function HorizontalSeparator() {
  return <span className="text-slate-500 mx-4">|</span>;
}

export default function Toolbar() {
  return (
    <div className="flex rounded-[20px] w-fit m-auto border border-[#d8d8d8] p-4 gap-2 bg-white">
      <FormatBold />
      <FormatItalic />
      <FormatUnderlined />
      <FormatColorText />
      <HorizontalSeparator />
      <FormatAlignCenter />
      <FormatAlignJustify />
      <FormatAlignLeft />
      <FormatAlignRight />
      <FormatListBulleted />
      <HorizontalSeparator />
      <Image />
      <AddLink />
      <TableChartOutlined />
      <HorizontalSeparator />
      <ScreenRotation />
      <DocumentScanner />
      <Search />
      <HorizontalSeparator />
      <MoreVert className="-ml-3" />
    </div>
  );
}
