import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type ThemeMode = "dark" | "light";

function initTheme() {
  const theme = (localStorage.getItem("theme") as ThemeMode) ?? "light";
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
  return theme;
}

const initialState: ThemeMode = initTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode(state) {
      if (state === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        return "light" as ThemeMode;
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        return "dark" as ThemeMode;
      }
    },
  },
});

export const selectTheme = (state: RootState) => state.theme;

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
