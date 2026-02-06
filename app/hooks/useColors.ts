import { useThemeStore } from "@/constants/themes/useThemeStore";

export const useColors=()=>{
    return useThemeStore((state)=>state.colors)
}