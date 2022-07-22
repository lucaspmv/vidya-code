import React from 'react';

import {
  Container,
  NewCustomerIcon,
  NewProductIcon,
  NewUserIcon,
  Title,
} from './styles';

interface CardProps {
  type: 'customer' | 'product' | 'user';
  isActive: boolean;
  onPress: () => void;
}

export function Card({ type, isActive, onPress }: CardProps) {
  return (
    <Container type={type} isActive={isActive} onPress={onPress}>
      {type === 'customer' && <NewCustomerIcon />}
      {type === 'product' && <NewProductIcon />}
      {type === 'user' && <NewUserIcon />}
      <Title>
        {type === 'customer' && 'Cliente'}
        {type === 'product' && 'Produto'}
        {type === 'user' && 'Usuário'}
      </Title>
    </Container>
  );
}
