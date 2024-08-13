import { ReactNode } from "react";
import clsx from "clsx";

type NavlinkProps = {
  target: string;
  icon: ReactNode;
  current: boolean;
  children: ReactNode;
};

export default function Navlink({
  target,
  icon,
  current,
  children,
}: NavlinkProps) {
  return (
    <a
      href={target}
      className={clsx({
        "flex gap-2 hover:bg-[rgba(255,255,255,0.14)] py-2 px-4":
          true,
        "text-white": current,
        "text-[#cdcdcd]": !current,
      })}
    >
      {icon}
      <p>{children}</p>
    </a>
  );
}
