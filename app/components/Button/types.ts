import { ReactNode } from "react"
import { PressableProps, ViewStyle } from "react-native"

export type TButtonType=
   'primary'  
  | 'secondary' 
  | 'tertiary' 
  | 'danger' 

  export type TButtonSize='small' | 'medium' | 'large'


  export interface IButtonProps extends Omit<PressableProps, 'style'>{
    buttonType:TButtonType,
    size:TButtonSize,
    isLoading?:boolean,
    block?:boolean,
    children?:ReactNode,
    style?:ViewStyle
  }

  export interface IButtonTextProps{
    children:ReactNode,
    color?:string
  }