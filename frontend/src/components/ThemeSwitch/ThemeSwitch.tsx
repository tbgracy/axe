import { LightMode, DarkMode } from "@mui/icons-material";

type ThemeSwitchProps = {
  mode: "dark" | "light";
  onClick: () => void;
};

export default function ThemeSwitch({ mode, onClick }: ThemeSwitchProps) {
  return (
    <div className="cursor-pointer w-fit flex items-center content-center gap-2" onClick={onClick}>
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
