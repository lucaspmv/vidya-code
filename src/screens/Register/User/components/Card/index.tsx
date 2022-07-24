import React from 'react';

import { Border, Container, Content, Customer, Icon } from './styles';

export interface CardProps {
  title: string;
  products?: {
    name: string;
  }[];
}

export function Card({ title, products }: CardProps) {
  return (
    <Container>
      <Border />
      <Content>
        <Customer>{title}</Customer>
        <Icon />
      </Content>
    </Container>
  );
}
