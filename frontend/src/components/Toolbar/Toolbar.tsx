import {
  AddLink,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatColorText,
  FormatItalic,
  FormatListBulleted,
  FormatUnderlined,
  ImageOutlined,
  Search,
  TableChartOutlined,
} from "@mui/icons-material";
import Menu from "./Menu";
import { TextDocument } from "../../types";
import ToolbarButton from "./ToolbarButton";

function HorizontalSeparator() {
  return <span className="text-slate-500 mx-2">|</span>;
}

export type ToolbarProps = {
  document: TextDocument;
  onDelete: () => void;
  onShare: () => void;
  onExport: () => void;
  onPrint: () => void;
  onMoreInfo: () => void;
};

export default function Toolbar({
  onDelete,
  onShare,
  onExport,
  onPrint,
  onMoreInfo,
}: ToolbarProps) {
  const dropdownStyle = "p-2 rounded-[10px] cursor-pointer bg-gray-200";
  return (
    <div className="flex items-center rounded-[20px] w-fit m-auto border border-[#d8d8d8] py-2 px-4 gap-1 bg-white">
      <select name="" id="" className={dropdownStyle}>
        <option value="">Times New Roman</option>
        <option value="">Helvetica</option>
      </select>
      <ToolbarButton
        tooltip={"Gras"}
        icon={<FormatBold />}
        onClick={() => {}}
      />
      <ToolbarButton
        tooltip={"Italique"}
        icon={<FormatItalic />}
        onClick={() => {}}
      />
      <ToolbarButton
        tooltip={"Souligner"}
        icon={<FormatUnderlined />}
        onClick={() => {}}
      />
      <ToolbarButton
        tooltip={"Couleur du texte"}
        icon={<FormatColorText />}
        onClick={() => {}}
      />
      <select
        title="Taille de la police"
        className={dropdownStyle}
        name=""
        id=""
      >
        <option value="">8</option>
        <option value="">16</option>
        <option value="">20</option>
        <option value="">24</option>
        <option value="">40</option>
        <option value="">32</option>
      </select>
      <HorizontalSeparator />
      <select name="" id="" className={dropdownStyle}>
        <option value="">Titre 1</option>
        <option value="">Titre 2</option>
        <option value="">Sous-titre</option>
        <option value="">Normal</option>
      </select>
      <ToolbarButton icon={<FormatAlignCenter />} onClick={() => {}} />
      <ToolbarButton icon={<FormatAlignJustify />} onClick={() => {}} />
      <ToolbarButton icon={<FormatAlignLeft />} onClick={() => {}} />
      <ToolbarButton icon={<FormatAlignRight />} onClick={() => {}} />
      <ToolbarButton
        tooltip={"List à puce"}
        icon={<FormatListBulleted />}
        onClick={() => {}}
      />
      <HorizontalSeparator />
      <ToolbarButton
        tooltip={"Insérer un lien hypertexte"}
        icon={<AddLink />}
        onClick={() => {}}
      />
      <ToolbarButton
        tooltip={"Insérer une image"}
        icon={<ImageOutlined />}
        onClick={() => {}}
      />
      <ToolbarButton
        tooltip={"Insérer un tableau"}
        icon={<TableChartOutlined />}
        onClick={() => {}}
      />
      <HorizontalSeparator />
      <select
        title="Taille du document"
        className={dropdownStyle}
        name=""
        id=""
      >
        <option value="">A5</option>
        <option value="">A4</option>
        <option value="">A3</option>
      </select>
      <select
        title="Orientation du document"
        className={dropdownStyle}
        name=""
        id=""
      >
        <option value="">Portrait</option>
        <option value="">Paysage</option>
      </select>
      <ToolbarButton
        tooltip={"Rechercher"}
        icon={<Search />}
        onClick={() => {}}
      />
      <HorizontalSeparator />
      <Menu
        onDelete={onDelete}
        onShare={onShare}
        onExport={onExport}
        onMoreInfo={onMoreInfo}
        onPrint={onPrint}
      />
    </div>
  );
}
