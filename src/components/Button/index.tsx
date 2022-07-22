import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
