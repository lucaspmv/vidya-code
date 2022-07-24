import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonLoading, ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

export function Button({
  text,
  loading = false,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Container disabled={loading || disabled} loading={loading} {...rest}>
      {!loading ? <ButtonText>{text}</ButtonText> : <ButtonLoading />}
    </Container>
  );
}
