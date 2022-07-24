import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Control, useForm } from 'react-hook-form';
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
      // send the data to api
      console.log(data);
      // timeout only for visual effect while there isn't an api to send the data
      setTimeout(() => {
        goBack();
      }, 2000);
    } catch (err) {
      console.log(err);
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
