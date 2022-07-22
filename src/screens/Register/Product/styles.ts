import styled from 'styled-components/native';
import { Header } from '../../../components/Header';

export const CustomHeader = styled(Header).attrs(({ theme }) => ({
  backgroundColor: theme.colors.blue,
  text: 'Novo Produto',
  canGoBack: true,
}))``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text``;
