import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Control, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as Yup from 'yup';

import { TextFormInput } from '../../../components/Input/Text/Form';
import { Space } from '../../../components/Space';

import { Container, CustomHeader, SubmitButton } from './styles';

interface FormData {
  name: string;
  description: string;
  version: string;
}

const schema = {
  name: Yup.string().required('O nome é obrigatório.'),
  description: Yup.string().required('A descrição é obrigatória.'),
  version: Yup.string().required('O nome fantasia é obrigatório.'),
};

export function ProductRegister() {
  const theme = useTheme();

  const { goBack } = useNavigation();

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(Yup.object().shape(schema)),
    mode: 'onChange',
  });

  const handleSubmit = useCallback(async () => {
    setIsButtonLoading(true);
    const data = getValues();

    try {
      // enviar para api
      console.log(data);
      // timeout só para efeito visual, já que não existe uma api
      setTimeout(() => {
        Alert.alert('Sucesso!', 'Produto cadastrado');
        goBack();
      }, 2000);
    } catch {
      Alert.alert('Erro!', 'Falha no cadastro');
      setIsButtonLoading(false);
    }
  }, [getValues, goBack]);

  return (
    <>
      <CustomHeader />
      <Container>
        <TextFormInput
          control={control as Control<any, any>}
          label="Nome"
          name="name"
          error={errors.name?.message}
          primaryColor={theme.colors.blue}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          label="Descrição"
          name="description"
          multiline
          error={errors.description?.message}
          primaryColor={theme.colors.blue}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          label="Versão"
          name="version"
          error={errors.version?.message}
          primaryColor={theme.colors.blue}
        />
        <SubmitButton
          onPress={handleSubmit}
          disabled={!isValid}
          loading={isButtonLoading}
        />
      </Container>
    </>
  );
}
