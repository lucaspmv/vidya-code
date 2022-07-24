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
  email: string;
  phone: string;
}

const schema = {
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string()
    .required('O e-mail é obrigatório.')
    .email('E-mail inválido.'),
  phone: Yup.string()
    .required('O número de telefone é obrigatório.')
    .min(15, 'O telefone precisar ser um número válido.'),
};

export function UserRegister() {
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
      // send the data to api
      console.log(data);
      // timeout only for visual effect while there isn't an api to send the data
      setTimeout(() => {
        Alert.alert('Sucesso!', 'Usuário cadastrado');
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
          name="email"
          label="E-mail"
          error={errors.email?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          name="phone"
          label="Telefone"
          mask="([00]) [00000]-[0000]"
          error={errors.phone?.message}
          primaryColor={theme.colors.purple}
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
