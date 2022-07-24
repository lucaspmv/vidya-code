import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Text } from '../Text';

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.8 as number | undefined,
}))`
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 8px;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
`;

export const ButtonText = styled(Text).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.white,
}))``;
