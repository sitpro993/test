import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  themeMode: string;
  menuCollapse: boolean;
}

const menuCollapse: string = localStorage.getItem("MENU_COLLAPSE") ?? "true";
const initialState: ThemeState = {
  themeMode: localStorage.getItem("THEME_MODE") ?? "light",
  menuCollapse: JSON.parse(menuCollapse) ?? true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("THEME_MODE", state.themeMode);
    },
    changeMenu(state) {
      state.menuCollapse = !state.menuCollapse;
      localStorage.setItem("MENU_COLLAPSE", state.menuCollapse.toString());
    },
  },
});

export const { changeTheme, changeMenu } = themeSlice.actions;

export default themeSlice.reducer;
