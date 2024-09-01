import { LightMode, DarkMode } from "@mui/icons-material";
import clsx from "clsx";

type ThemeSwitchProps = {
  mode: "dark" | "light";
  expanded?: boolean;
  onClick: () => void;
};

export default function ThemeSwitch({
  mode,
  expanded = true,
  onClick,
}: ThemeSwitchProps) {
  return (
    <div
      className={clsx({
        "cursor-pointer w-fit flex items-center content-center gap-2": true,
        "flex-col": !expanded,
      })}
      onClick={onClick}
    >
      <DarkMode
        htmlColor={mode === "dark" ? "white" : "gray"}
        fontSize={mode === "dark" ? "large" : "medium"}
      />
      <LightMode
        htmlColor={mode === "light" ? "white" : "gray"}
        fontSize={mode === "light" ? "large" : "medium"}
      />
    </div>
  );
}
