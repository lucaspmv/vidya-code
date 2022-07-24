import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Space } from '../../components/Space';
import { AsyncStorageKeyEnum } from '../../enums/AsyncStorageKeyEnum';
import { RouteNameEnum } from '../../enums/RouteNameEnum';
import { setItem } from '../../services/AsyncStorage';

import {
  Container,
  UserNameInput,
  PasswordInput,
  SignInButton,
  Title,
} from './styles';

export function SignIn() {
  const { reset } = useNavigation();

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSignIn = useCallback(async () => {
    setIsButtonLoading(true);

    await setItem(AsyncStorageKeyEnum.TOKEN, 'valid_token');

    reset({
      index: 0,
      routes: [
        {
          name: RouteNameEnum.HOME,
        },
      ],
    });
  }, [reset]);

  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <UserNameInput onChangeText={setUserName} />
      <Space height={16} />
      <PasswordInput secureTextEntry onChangeText={setPassword} />
      <SignInButton onPress={handleSignIn} loading={isButtonLoading} />
    </Container>
  );
}
