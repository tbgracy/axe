import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  icon?: ReactNode;
  onClick: () => void;
  primary?: boolean;
  children: ReactNode;
  disabled?: boolean;
};

export default function Button({
  icon,
  onClick,
  primary = true,
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx({
        "h-16 rounded-xl flex py-3 px-6 gap-3 items-center": true,
        "bg-[#2c2c2c] hover:bg-[#000000]": !primary && !disabled,
        "bg-[#0D6EB5] hover:bg-[#0a5890]": primary && !disabled,
        "cursor-not-allowed bg-gray-300": disabled,
      })}
    >
      {icon}
      <p
        className={clsx({
          "text-white font-bold text-sm": !disabled,
          "text-gray-500": disabled,
        })}
      >
        {children}
      </p>
    </button>
  );
}
