import React, { useState } from 'react';
import { Space } from '../../components/Space';

import {
  Container,
  EmailInput,
  PasswordInput,
  SignInButton,
  Title,
} from './styles';

export function SignIn() {
  const [shouldShowPassword, setShouldShowPassword] = useState(true);

  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <EmailInput />
      <Space height={16} />
      <PasswordInput secureTextEntry={!shouldShowPassword} />
      <SignInButton />
    </Container>
  );
}
