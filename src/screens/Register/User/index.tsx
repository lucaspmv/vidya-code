import React from 'react';
import { Space } from '../../../components/Space';

import { Card, CardProps as CustomerType } from './components/Card';

import { Container, CustomHeader } from './styles';

const data: CustomerType[] = [
  {
    title: 'MAGAZINE LUIZA',
    products: [
      {
        name: 'IFOOD',
      },
      {
        name: 'INSTAGRAM',
      },
    ],
  },
  {
    title: 'CENTAURO',
    products: [
      {
        name: 'SPOTIFY',
      },
    ],
  },
  {
    title: 'INOVAHU',
  },
  {
    title: 'STONIA',
  },
];

export function UserRegister() {
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
