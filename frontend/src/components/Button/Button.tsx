import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  icon?: ReactNode;
  onClick: () => void;
  primary: boolean;
  children: ReactNode;
};

export default function Button({
  icon,
  onClick,
  primary = true,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx({
        "bg-[#0D6EB5] rounded-xl flex py-3 px-6 gap-3 items-center hover:bg-[#0a5890]":
          true,
        "bg-[#2c2c2c] hover:bg-[#000000]": primary,
      })}
    >
      {icon}
      <p className="text-white font-bold text-sm">{children}</p>
    </button>
  );
}
