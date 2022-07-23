import React from 'react';
import { useTheme } from 'styled-components/native';
import { InputText } from '../../../components/Inputs/Text';

import { Space } from '../../../components/Space';

import { Container, CustomHeader, SubmitButton } from './styles';

export function CustomerRegister() {
  const theme = useTheme();

  return (
    <>
      <CustomHeader />
      <Container>
        <InputText label="CPNJ" />
        <Space height={40} />
        <InputText label="Razão Social" />
        <Space height={40} />
        <InputText label="Nome Fantasia" />
        <Space height={40} />
        <InputText label="CEP" />
        <Space height={40} />
        <InputText label="Estado" />
        <Space height={40} />
        <InputText label="Cidade" />
        <Space height={40} />
        <InputText label="Bairro" />
        <Space height={40} />
        <InputText label="Número" />
        <Space height={40} />
        <InputText label="Logradouro" />
        <Space height={40} />
        <InputText label="Email" />
        <Space height={40} />
        <InputText label="Telefone" />
        <SubmitButton />
      </Container>
    </>
  );
}
