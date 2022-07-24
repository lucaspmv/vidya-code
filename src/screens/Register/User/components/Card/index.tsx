import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { RouteNameEnum } from '../../../../../enums/RouteNameEnum';

import { Border, Container, Content, Customer, Icon } from './styles';

export interface CardProps {
  title: string;
  products?: {
    name: string;
  }[];
}

export function Card({ title, products }: CardProps) {
  const { navigate } = useNavigation();

  const onPress = useCallback(() => {
    if (products) {
      navigate(RouteNameEnum.USER_REGISTER_PRODUCTS, {
        // era melhor enviar apenas o id do cliente e buscar os produtos pelo id
        // como não existe uma api, fiz desse modo
        products,
      });
    } else {
      navigate(RouteNameEnum.USER_REGISTER);
    }
  }, [navigate, products]);

  return (
    <Container onPress={onPress}>
      <Border />
      <Content>
        <Customer>{title}</Customer>
        <Icon />
      </Content>
    </Container>
  );
}
