import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Space } from '../../../../components/Space';
import { Card } from '../components/Card';
import { Container, CustomHeader } from './styles';

export interface UserRegisterProductsParams {
  products?: {
    name: string;
  }[];
}

export function UserRegisterProducts() {
  const { params } = useRoute();

  const { products } = useMemo(
    () => params as UserRegisterProductsParams,
    [params],
  );

  const renderSeparator = () => {
    return <Space height={16} />;
  };

  return (
    <>
      <CustomHeader />
      <Container
        data={products}
        keyExtractor={(item: { name: string }) => item.name}
        ItemSeparatorComponent={renderSeparator}
        // eslint-disable-next-line react/no-unused-prop-types
        renderItem={({ item }: { item: { name: string } }) => {
          return <Card title={item.name} />;
        }}
      />
    </>
  );
}
