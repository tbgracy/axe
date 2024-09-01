import { ReactNode } from "react";

type ToolbarButtonProps = {
  tooltip?: string;
  icon: ReactNode;
  color?: string;
  isActive?: boolean;
  onClick: () => void;
};

export default function ToolbarButton({
  tooltip,
  icon,
  color,
  onClick,
  isActive = false,
}: ToolbarButtonProps) {
  return (
    <div
      title={tooltip}
      className="cursor-pointer hover:bg-gray-200 rounded-[10px] p-2"
      style={{
        color: color ?? isActive ? "#0D6EB5" : "black",
      }}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
