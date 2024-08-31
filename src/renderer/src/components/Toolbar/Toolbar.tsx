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
import ToolbarButton from "./ToolbarButton";
import { useRef } from "react";

function HorizontalSeparator() {
  return <span className="text-slate-500 mx-2">|</span>;
}

export type HeadingLevel = 1 | 2 | 3 | 4;

export type TextAlignment = "left" | "right" | "center" | "justify";

export type ToolbarProps = {
  document: TextDocument;
  currentColor: string;
  onDelete: () => void;
  onExport: () => void;
  onPrint: () => void;
  onMoreInfo: () => void;
  onChangeFont: (fontFamily: string) => void;
  onChangeColor: (newColor: string) => void;
  onTextAlignChange: (alignment: TextAlignment) => void;
  onFormatBold: () => void;
  onFormatItalic: () => void;
  onFormatUnderline: () => void;
  onHeadingChange: (level: HeadingLevel) => void;
  onBulletListToggle: () => void;
};

const fontFamilies = ["Inter", "Galada", "Nunito", "Montserrat"];

export default function Toolbar({
  onFormatBold,
  onFormatItalic,
  onFormatUnderline,
  onChangeFont,
  onHeadingChange,
  onChangeColor,
  onTextAlignChange,
  onBulletListToggle,
  currentColor,
  onDelete,
  onExport,
  onPrint,
  onMoreInfo,
}: ToolbarProps) {
  const dropdownStyle = "p-2 rounded-[10px] cursor-pointer bg-gray-200";
  const colorInputRef = useRef<HTMLInputElement>(null);

  function handleColorChange() {
    colorInputRef.current?.click();
  }

  return (
    <div className="flex items-center rounded-[20px] w-fit m-auto h-[4rem] border border-[#d8d8d8] py-2 px-4 gap-1 bg-white">
      <select
        name=""
        id=""
        className={`w-[6rem] ${dropdownStyle}`}
        onChange={(e) => onChangeFont(e.currentTarget.value)}
      >
        {fontFamilies.map((f) => (
          <option key={f} value={f} style={{ fontFamily: f }}>
            {f}
          </option>
        ))}
      </select>
      <ToolbarButton
        tooltip={"Gras"}
        icon={<FormatBold />}
        onClick={onFormatBold}
      />
      <ToolbarButton
        tooltip={"Italique"}
        icon={<FormatItalic />}
        onClick={onFormatItalic}
      />
      <ToolbarButton
        tooltip={"Souligner"}
        icon={<FormatUnderlined />}
        onClick={onFormatUnderline}
      />
      <ToolbarButton
        tooltip={"Changer la couleur du text"}
        color={currentColor}
        icon={<FormatColorText />}
        onClick={handleColorChange}
      />
      <input
        ref={colorInputRef}
        type="color"
        name=""
        hidden
        id=""
        onChange={(e) => onChangeColor(e.target.value)}
      />
      <HorizontalSeparator />
      <select
        onChange={(e) =>
          onHeadingChange(Number.parseInt(e.target.value) as HeadingLevel)
        }
        className={dropdownStyle}
      >
        <option value="1">Titre 1</option>
        <option value="2">Titre 2</option>
        <option value="3">Titre 3</option>
        <option value="4">Titre 4</option>
      </select>
      <ToolbarButton
        icon={<FormatAlignJustify />}
        onClick={() => {
          onTextAlignChange("justify");
        }}
      />
      <ToolbarButton
        icon={<FormatAlignLeft />}
        onClick={() => {
          onTextAlignChange("left");
        }}
      />
      <ToolbarButton
        icon={<FormatAlignCenter />}
        onClick={() => {
          onTextAlignChange("center");
        }}
      />
      <ToolbarButton
        icon={<FormatAlignRight />}
        onClick={() => {
          onTextAlignChange("right");
        }}
      />
      <ToolbarButton
        tooltip={"List à puce"}
        icon={<FormatListBulleted />}
        onClick={onBulletListToggle}
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
        onExport={onExport}
        onMoreInfo={onMoreInfo}
        onPrint={onPrint}
      />
    </div>
  );
}
