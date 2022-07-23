import styled from 'styled-components/native';
import { Text } from '../Text';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 8px;
`;

export const ButtonText = styled(Text).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.white,
}))``;
