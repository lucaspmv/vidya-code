import React, { useCallback, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Control, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { Space } from '../../../components/Space';
import { TextFormInput } from '../../../components/Input/Text/Form';

import { Container, CustomHeader, SubmitButton } from './styles';
import { validateCNPJ } from '../../../utils/validateCNPJ';

import { getDataByCNPJ } from '../../../services/ReceitaWS/getDataByCNPJ';

interface FormData {
  cnpj: string;
  socialReason: string;
  fantasyName: string;
  zipCode: string;
  state: string;
  city: string;
  district: string;
  number: string;
  publicPlace: string;
  email: string;
  phone: string;
}

const schema = {
  cnpj: Yup.string()
    .required('O CNPJ é obrigatório.')
    .min(18, 'O CNPJ precisa ser um número válido.')
    .test({
      name: 'CNPJ validation',
      test: value => validateCNPJ(value ?? ''),
      message: 'O CNPJ informado é inválido.',
    }),
  socialReason: Yup.string().required('A razão social é obrigatória.'),
  fantasyName: Yup.string().required('O nome fantasia é obrigatório.'),
  zipCode: Yup.string()
    .required('O CEP é obrigatório.')
    .min(10, 'O CEP precisa ser um número válido.'),
  state: Yup.string().required('O estado é obrigatório.'),
  city: Yup.string().required('A cidade é obrigatória.'),
  district: Yup.string().required('O bairro é obrigatório.'),
  number: Yup.string().required('O número é obrigatório.'),
  publicPlace: Yup.string().required('O logradouro é obrigatório.'),
  email: Yup.string()
    .required('O e-mail é obrigatório.')
    .email('E-mail inválido.'),
  phone: Yup.string()
    .required('O número de telefone é obrigatório.')
    .min(14, 'O telefone precisar ser um número válido.'),
};

export function CustomerRegister() {
  const theme = useTheme();

  const cnpjTextInputRef = useRef<TextInput>(null);

  const {
    control,
    getValues,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(Yup.object().shape(schema)),
    mode: 'onChange',
  });

  const { goBack } = useNavigation();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const validateSchema = useCallback(async () => {
    try {
      const data = getValues();

      await Yup.object().shape(schema).validate(data, {
        abortEarly: false,
      });

      setIsButtonDisabled(false);
    } catch {
      setIsButtonDisabled(true);
    }
  }, [getValues]);

  const getCompanyDataByCNPJ = useCallback(
    async (cnpj: string) => {
      if (cnpj.length === 18) {
        cnpjTextInputRef.current?.blur();

        try {
          const {
            nome,
            fantasia,
            cep,
            uf,
            municipio,
            bairro,
            numero,
            logradouro,
            email,
            telefone,
          } = await getDataByCNPJ(cnpj);

          setValue('socialReason', nome);
          setValue('fantasyName', fantasia);
          setValue('zipCode', cep);
          setValue('state', uf);
          setValue('city', municipio);
          setValue('district', bairro);
          setValue('number', numero);
          setValue('publicPlace', logradouro);
          setValue('email', email);
          setValue('phone', telefone);

          await validateSchema();

          clearErrors();
        } catch (err) {
          console.log(err);
        }
      }
    },
    [clearErrors, setValue, validateSchema],
  );

  const handleSubmit = useCallback(async () => {
    setIsButtonLoading(true);
    const data = getValues();

    try {
      // send the data to api
      console.log(data);

      // timeout only for visual effect while there isn't an api to send the data
      setTimeout(() => {
        Alert.alert('Sucesso!', 'Cliente cadastrado');
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
          inputRef={cnpjTextInputRef}
          control={control as Control<any, any>}
          onChangeText={cnpj => {
            validateSchema();
            getCompanyDataByCNPJ(cnpj);
          }}
          name="cnpj"
          label="CNPJ"
          mask="[00].[000].[000]/[0000]-[00]"
          keyboardType="numeric"
          error={errors.cnpj?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="socialReason"
          label="Razão Social"
          error={errors.socialReason?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="fantasyName"
          label="Nome Fantasia"
          error={errors.fantasyName?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="zipCode"
          label="CEP"
          mask="[00].[000]-[000]"
          keyboardType="numeric"
          error={errors.zipCode?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="state"
          label="Estado"
          error={errors.state?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="city"
          label="Cidade"
          error={errors.city?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="district"
          label="Bairro"
          error={errors.district?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="number"
          label="Número"
          keyboardType="numeric"
          error={errors.number?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="publicPlace"
          label="Logradouro"
          error={errors.publicPlace?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="email"
          label="E-mail"
          error={errors.email?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={validateSchema}
          name="phone"
          label="Telefone"
          mask="([00]) [0000]-[0000]"
          error={errors.phone?.message}
          primaryColor={theme.colors.purple}
        />
        <SubmitButton
          onPress={handleSubmit}
          disabled={isButtonDisabled}
          loading={isButtonLoading}
        />
      </Container>
    </>
  );
}
