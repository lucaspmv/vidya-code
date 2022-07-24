import styled from 'styled-components/native';

import { Header } from '../../../../components/Header';

export const CustomHeader = styled(Header).attrs(({ theme }) => ({
  backgroundColor: theme.colors.cyan,
  text: 'Produtos',
  canGoBack: true,
}))``;

export const Container = styled.FlatList.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 40,
    paddingHorizontal: 25,
    paddingBottom: 80,
  },
}))`
  background-color: ${({ theme }) => theme.colors.white};
`;
