import styled from 'styled-components/native';

import { Button } from '../../components/Button';
import { InputText } from '../../components/Inputs/Text';
import { Text } from '../../components/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 32px;
`;

export const Title = styled(Text).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.purple,
  weight: 'bold',
}))`
  margin-bottom: 24px;
`;

export const UserNameInput = styled(InputText).attrs(() => ({
  label: 'Nome de usuário',
}))``;

export const PasswordInput = styled(InputText).attrs(() => ({
  label: 'Senha',
}))``;

export const SignInButton = styled(Button).attrs(() => ({
  text: 'Entrar',
}))`
  margin-top: 32px;
`;
