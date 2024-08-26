import { ReactNode } from "react";

type ToolbarButtonProps = {
  tooltip?: string;
  icon: ReactNode;
  onClick: () => void;
};

export default function ToolbarButton({
  tooltip,
  icon,
  onClick,
}: ToolbarButtonProps) {
  return (
    <div
      title={tooltip}
      className="cursor-pointer hover:bg-gray-200 rounded-[10px] p-2"
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
