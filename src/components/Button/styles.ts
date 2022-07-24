import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Text } from '../Text';

interface ContainerProps {
  loading: boolean;
  backgroundColor?: string;
}

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.8 as number,
}))<ContainerProps>`
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, backgroundColor = theme.colors.purple }) =>
    backgroundColor};
  border-radius: 8px;

  ${({ disabled, loading }) =>
    disabled &&
    !loading &&
    css`
      opacity: 0.6;
    `}
`;

export const ButtonText = styled(Text).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.white,
}))``;

export const ButtonLoading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 'small',
}))``;
