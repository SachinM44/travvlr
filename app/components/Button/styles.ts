import { useColors } from '@/hooks/useColors';
import {TButtonSize, TButtonType} from './types'

export const useButtonStyles = () => {
  const colors = useColors();

  const buttonColors: Record<TButtonType, {
    background: string;
    backgroundPressed: string;
    backgroundDisabled: string;
  }> = {
    primary: {
      background: colors.primary.default,
      backgroundPressed: colors.primary.darker,
      backgroundDisabled: colors.primary.light,
    },
    secondary: {
      background: colors.neutral.darker,
      backgroundPressed: colors.primary.light,
      backgroundDisabled: colors.neutral.default,
    },
    tertiary: {
      background: 'transparent',
      backgroundPressed: colors.primary.light,
      backgroundDisabled: 'transparent',
    },
    danger: {
      background: colors.red.default,
      backgroundPressed: colors.red.darker,
      backgroundDisabled: colors.red.light,
    },
  };

  const buttonSizes: Record<TButtonSize, {
    paddingVertical: number;
    paddingHorizontal: number;
  }> = {
    large: { paddingVertical: 4, paddingHorizontal: 4 },
    small: { paddingVertical: 8, paddingHorizontal: 8 },
    medium: { paddingVertical: 12, paddingHorizontal: 12 },
  };

  const textColors: Record<TButtonType, string> = {
    primary: colors.neutral.white,
    secondary: colors.primary.default,
    tertiary: colors.primary.default,
    danger: colors.neutral.white,
  };

  const iconColors: Record<TButtonType, string> = {
    primary: colors.neutral.white,
    secondary: colors.primary.dark,
    tertiary: colors.primary.dark,
    danger: colors.neutral.white,
  };

  return { buttonColors, buttonSizes, textColors, iconColors };
};
