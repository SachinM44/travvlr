
import { createContext, useContext } from 'react'
import {TButtonSize, TButtonType} from './types'

 interface IButtonContextProps{
    buttonType:TButtonType,
    buttonSize:TButtonSize,
    isLoading:boolean,
    disable:boolean
}

const buttonContext=createContext<IButtonContextProps | undefined>(undefined)

export const ButtonProvider=buttonContext.Provider;

export const useButtonContex=()=>{
    const context=useContext(buttonContext)
    if(!context){
        console.log('use the button context')
    }
    return context
}