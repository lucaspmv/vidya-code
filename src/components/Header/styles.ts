import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { CaretLeft, SignOut } from 'phosphor-react-native';

import { Text } from '../Text';

interface ContainerProps {
  backgroundColor?: string;
}

export const CustomStatusBar = styled(StatusBar).attrs(() => ({
  barStyle: 'light-content',
  backgroundColor: 'transparent',
  translucent: true,
}))``;

export const Container = styled.View<ContainerProps>`
  padding: 0 25px 30px;
  height: ${getStatusBarHeight() + 100}px;

  background-color: ${({ theme, backgroundColor = theme.colors.gray5 }) =>
    backgroundColor};
  justify-content: flex-end;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  margin-left: -6px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text).attrs(({ theme }) => ({
  size: 18,
  weight: 'bold',
  color: theme.colors.white,
}))`
  line-height: 25px;
`;

export const CaretLeftIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 25,
  weight: 'bold',
}))`
  margin-right: 12px;
`;

export const SignOutButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))``;

export const SignOutButtonIcon = styled(SignOut).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 25,
  weight: 'bold',
}))``;
