import { ReactNode } from "react";

type ToolbarButtonProps = {
  tooltip?: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick: () => void;
};

type TextColorButtonProps = {
  tooltip?: string;
  color: string;
  onClick: () => void;
};

export function TextColorButton({
  tooltip,
  color,
  onClick,
}: TextColorButtonProps) {
  return (
    <div
      title={tooltip}
      className="cursor-pointer hover:bg-gray-200 rounded-[10px] p-2"
      onClick={onClick}
    >
      <h4 className="border-b-4 leading-4" style={{ borderColor: color }}>
        A
      </h4>
    </div>
  );
}

export default function ToolbarButton({
  tooltip,
  icon,
  onClick,
  isActive = false,
}: ToolbarButtonProps) {
  return (
    <div
      title={tooltip}
      className="cursor-pointer hover:bg-gray-200 rounded-[10px] p-2"
      style={{
        color: isActive ? "#0D6EB5" : "black",
      }}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
