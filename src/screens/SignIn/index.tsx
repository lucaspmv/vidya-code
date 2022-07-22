import React, { useCallback } from 'react';
import { Space } from '../../components/Space';
import { AsyncStorageKeyEnum } from '../../enums/AsyncStorageKeyEnum';
import { setItem } from '../../services/AsyncStorage';

import {
  Container,
  EmailInput,
  PasswordInput,
  SignInButton,
  Title,
} from './styles';

export function SignIn() {
  const handleSignIn = useCallback(async () => {
    await setItem(AsyncStorageKeyEnum.TOKEN, 'valid_token');
  }, []);

  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <EmailInput autoCapitalize="none" autoCorrect={false} />
      <Space height={16} />
      <PasswordInput secureTextEntry />
      <SignInButton onPress={handleSignIn} />
    </Container>
  );
}
