import React from 'react';
import { Space } from '../../../../components/Space';
import { data } from '../../../../mock/data';
import { Card } from '../components/Card';
import { Container, CustomHeader } from './styles';

export function UserRegisterCustomers() {
  const renderSeparator = () => {
    return <Space height={16} />;
  };

  return (
    <>
      <CustomHeader />
      <Container
        data={data}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => {
          return <Card title={item.title} products={item.products} />;
        }}
      />
    </>
  );
}
