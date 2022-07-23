import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ColorValue, TextInput } from 'react-native';
import { Text } from '../Text';

interface InputProps {
  isActive: boolean;
  primaryColor?: string;
  error?: boolean;
}

export const LabelText = styled(Text).attrs(({ theme }) => ({
  color: theme.colors.gray4,
}))`
  margin-right: auto;
  margin-bottom: 8px;
  line-height: 24px;
`;

export const Input = styled(TextInput).attrs<InputProps>(
  ({ theme, primaryColor }) => ({
    placeholderTextColor: primaryColor
      ? (primaryColor as ColorValue)
      : (theme.colors.gray4 as ColorValue),
    selectionColor: primaryColor
      ? (primaryColor as ColorValue)
      : (theme.colors.gray5 as ColorValue),
  }),
)<InputProps>`
  width: 100%;
  font-size: ${RFValue(17)}px;
  padding: 18px;
  color: ${({ error, theme }) =>
    !error ? theme.colors.gray5 : theme.colors.red};
  background-color: #f9fafb;
  border-width: 1px;
  border-radius: 8px;

  ${({ error, isActive, primaryColor, theme }) => {
    if (error) {
      return css`
        border-color: ${theme.colors.red};
      `;
    }
    if (isActive) {
      return css`
        border-color: ${primaryColor ?? theme.colors.gray5};
      `;
    }
    return css`
      border-color: ${theme.colors.gray2};
    `;
  }}
`;

export const ErrorText = styled(Text).attrs(({ theme }) => ({
  color: theme.colors.red,
  size: 14,
}))`
  margin: 8px auto 0 0;
`;
