import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type ThemeMode = "dark" | "light";

const initialState: ThemeMode =
  (localStorage.getItem("theme") as ThemeMode) ?? "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode(state) {
      if (state === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", state);
        return "light" as ThemeMode;
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", state);
        return "dark" as ThemeMode;
      }
    },
  },
});

export const selectTheme = (state: RootState) => state.theme;

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
