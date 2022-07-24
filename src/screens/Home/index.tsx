import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Header } from '../../components/Header';
import { Space } from '../../components/Space';
import { RouteNameEnum } from '../../enums/RouteNameEnum';
import { Card } from './components/Card';

import { Container, Title } from './styles';

export function Home() {
  const { navigate } = useNavigation();

  const [cardType, setCardType] = useState<'customer' | 'product' | 'user'>();

  const handleNewCustomer = useCallback(() => {
    setCardType('customer');
    navigate(RouteNameEnum.CUSTOMER_REGISTER);
  }, [navigate]);

  const handleNewProduct = useCallback(() => {
    setCardType('product');
    navigate(RouteNameEnum.PRODUCT_REGISTER);
  }, [navigate]);

  const handleNewUser = useCallback(() => {
    setCardType('user');
    navigate(RouteNameEnum.USER_REGISTER);
  }, [navigate]);

  useFocusEffect(
    useCallback(() => {
      setCardType(undefined);
    }, []),
  );

  return (
    <>
      <Header text="Início" canSignOut />
      <Container>
        <Title>Cadastrar:</Title>
        <Card
          type="customer"
          onPress={handleNewCustomer}
          isActive={cardType === 'customer'}
        />
        <Space height={26} />
        <Card
          type="product"
          onPress={handleNewProduct}
          isActive={cardType === 'product'}
        />
        <Space height={26} />
        <Card
          type="user"
          onPress={handleNewUser}
          isActive={cardType === 'user'}
        />
      </Container>
    </>
  );
}
