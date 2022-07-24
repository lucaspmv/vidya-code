import styled from 'styled-components/native';

import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { ScrollViewContainer } from '../../../components/ScrollViewContainer';

export const CustomHeader = styled(Header).attrs(({ theme }) => ({
  backgroundColor: theme.colors.cyan,
  text: 'Novo Usuário',
  canGoBack: true,
}))``;

export const Container = styled(ScrollViewContainer)``;

export const SubmitButton = styled(Button).attrs(({ theme }) => ({
  text: 'Confirmar',
  backgroundColor: theme.colors.cyan,
}))`
  margin-top: 60px;
`;
