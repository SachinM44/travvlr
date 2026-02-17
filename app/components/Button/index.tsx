import React, { useMemo } from "react";
import { IButtonProps } from "./types";
import { Pressable } from "react-native";
import { useButtonStyles } from "./styles";
import { ButtonProvider } from "./buttonContext";

export const Button: React.FC<IButtonProps> = ({
  size,
  children,
  buttonType,
  isLoading,
  block = false,
  style,
  disabled = false,
  ...PressableProps
}) => {

  const { buttonColors, buttonSizes } = useButtonStyles();

  const contextValue = useMemo(() => ({
    buttonType,
    buttonSize: size,
    isLoading: isLoading ?? false,
    disable: disabled ?? false,
  }), [buttonType, size, isLoading, disabled])

  const colors = buttonColors[buttonType]
  const sizing = buttonSizes[size]

  return (
    <ButtonProvider value={contextValue}>
      <Pressable
        disabled={disabled || isLoading}
        style={({ pressed }) => [
          sizing, {
            backgroundColor: pressed ? colors.background : disabled
              ? colors.backgroundDisabled : colors.background
          },
          block && { width: '100%' },
          style
        ]}
      >
        {children}
      </Pressable>
    </ButtonProvider>
  )

}