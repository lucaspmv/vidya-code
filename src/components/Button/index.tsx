import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonLoading, ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
  backgroundColor?: string;
}

export function Button({
  text,
  loading = false,
  backgroundColor,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Container
      disabled={loading || disabled}
      loading={loading}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {!loading ? <ButtonText>{text}</ButtonText> : <ButtonLoading />}
    </Container>
  );
}
