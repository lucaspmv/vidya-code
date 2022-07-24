import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ColorValue, TextInput } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import { Text } from '../../Text';

interface InputProps {
  isActive: boolean;
  disabled: boolean;
  primaryColor?: string;
  error?: boolean;
}

type LabelTextProps = Pick<InputProps, 'error'>;

export const LabelText = styled(Text).attrs(({ theme, error }) => ({
  color: error ? theme.colors.red : theme.colors.gray4,
}))<LabelTextProps>`
  margin-right: auto;
  margin-bottom: 8px;
  line-height: 24px;
`;

export const Input = styled(TextInput).attrs<InputProps>(
  ({ theme, primaryColor }) => ({
    placeholderTextColor: theme.colors.gray4 as ColorValue,
    selectionColor: primaryColor
      ? (primaryColor as ColorValue)
      : (theme.colors.gray5 as ColorValue),
  }),
)<InputProps>`
  font-size: ${RFValue(17)}px;
  padding: 18px;
  color: ${({ error, isActive, theme }) =>
    error && !isActive ? theme.colors.red : theme.colors.gray5};
  background-color: ${({ theme }) => theme.colors.gray1};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.gray2};
    `}

  ${({ error, theme }) =>
    error &&
    css`
      border-width: 1.5px;
      border-color: ${theme.colors.red};
    `}

  ${({ isActive, primaryColor, theme }) =>
    isActive &&
    css`
      border-width: 1.5px;
      border-color: ${primaryColor ?? theme.colors.gray5};
      background-color: ${theme.colors.white};
    `}
`;

export const InputMask = styled(TextInputMask).attrs<InputProps>(
  ({ theme, primaryColor }) => ({
    placeholderTextColor: theme.colors.gray4 as ColorValue,
    selectionColor: primaryColor
      ? (primaryColor as ColorValue)
      : (theme.colors.gray5 as ColorValue),
  }),
)<InputProps>`
  font-size: ${RFValue(17)}px;
  padding: 18px;
  color: ${({ error, isActive, theme }) =>
    error && !isActive ? theme.colors.red : theme.colors.gray5};
  background-color: ${({ theme }) => theme.colors.gray1};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.gray2};
    `}

  ${({ error, theme }) =>
    error &&
    css`
      border-width: 1.5px;
      border-color: ${theme.colors.red};
    `}

  ${({ isActive, primaryColor, theme }) =>
    isActive &&
    css`
      border-width: 1.5px;
      border-color: ${primaryColor ?? theme.colors.gray5};
      background-color: ${theme.colors.white};
    `}
`;

export const ErrorText = styled(Text).attrs(({ theme }) => ({
  color: theme.colors.red,
  size: 14,
}))`
  margin: 8px auto 0 0;
`;
