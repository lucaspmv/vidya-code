import React, { useCallback, useState } from 'react';
import { Space } from '../../components/Space';
import { AsyncStorageKeyEnum } from '../../enums/AsyncStorageKeyEnum';
import { setItem } from '../../services/AsyncStorage';

import {
  Container,
  UserNameInput,
  PasswordInput,
  SignInButton,
  Title,
} from './styles';

export function SignIn() {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSignIn = useCallback(async () => {
    await setItem(AsyncStorageKeyEnum.TOKEN, 'valid_token');
  }, []);

  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <UserNameInput onChangeText={setUserName} />
      <Space height={16} />
      <PasswordInput secureTextEntry onChangeText={setPassword} />
      <SignInButton onPress={handleSignIn} />
    </Container>
  );
}
