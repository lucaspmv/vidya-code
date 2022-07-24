import styled from 'styled-components/native';

import { Button } from '../../components/Button';
import { TextInput } from '../../components/Input/Text';
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
  margin-bottom: 34px;
`;

export const UserNameInput = styled(TextInput).attrs(() => ({
  label: 'Nome de usuário',
}))``;

export const PasswordInput = styled(TextInput).attrs(() => ({
  label: 'Senha',
}))``;

export const SignInButton = styled(Button).attrs(() => ({
  text: 'Entrar',
}))`
  margin-top: 40px;
`;
