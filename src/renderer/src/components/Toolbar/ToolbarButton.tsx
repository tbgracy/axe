import { ReactNode } from "react";

type ToolbarButtonProps = {
  tooltip?: string;
  icon: ReactNode;
  color?: string;
  onClick: () => void;
};

export default function ToolbarButton({
  tooltip,
  icon,
  color,
  onClick,
}: ToolbarButtonProps) {
  return (
    <div
      title={tooltip}
      className="cursor-pointer hover:bg-gray-200 rounded-[10px] p-2"
      style={{
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
