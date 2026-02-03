import { themes } from "./colors";
import { TThemeColors, TThemName } from "./types";
import {create} from 'zustand'


export interface IThemeStore{
    colors:TThemeColors,
    currentTheme:TThemName,
    setTheme:(TThemName:TThemName)=>void
}

export const useThemeStore=create<IThemeStore>((set)=>({
    colors:themes.default,///intitial colors
    currentTheme:'default',// and it should be default calor
    setTheme:(TThemName)=>{
     set({
        colors:themes[TThemName],
        currentTheme:TThemName,
     })
    }
}))