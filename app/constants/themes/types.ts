import { themes } from "./colors";

export type TThemeColors=typeof themes.default;
export type TThemName=keyof typeof themes;