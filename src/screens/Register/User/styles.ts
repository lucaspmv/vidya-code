import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { Header } from '../../../components/Header';
import { CardProps } from './components/Card';

export const CustomHeader = styled(Header).attrs(({ theme }) => ({
  backgroundColor: theme.colors.cyan,
  text: 'Clientes',
  canGoBack: true,
}))``;

export const Container = styled(
  FlatList as new (props: FlatListProps<CardProps>) => FlatList<CardProps>,
).attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
}))`
  background-color: ${({ theme }) => theme.colors.white};
`;
