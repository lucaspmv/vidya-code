import React, { useCallback } from 'react';
import { useTheme } from 'styled-components/native';
import { Control, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Space } from '../../../components/Space';

import { Container, CustomHeader, SubmitButton } from './styles';
import { validateCNPJ } from '../../../utils/validateCNPJ';

import { TextFormInput } from '../../../components/Input/Text/Form';
import { getDataByCNPJ } from '../../../services/getDataByCNPJ';

interface FormData {
  cnpj: string;
  socialReason: string;
  fantasyName: string;
  zipCode: string;
  state: string;
  city: string;
  district: string;
  number: number;
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
    .min(9, 'O CEP precisa ser um número válido.'),
  state: Yup.string().required('O estado é obrigatório.'),
  city: Yup.string().required('A cidade é obrigatória.'),
  district: Yup.string().required('O bairro é obrigatório.'),
  number: Yup.string().required('O número é obrigatório.'),
  publicPlace: Yup.string().required('O logradouro é obrigatório.'),
  email: Yup.string()
    .required('O nome fantasia é obrigatório.')
    .email('E-mail inválido.'),
  phone: Yup.string()
    .required('O nome fantasia é obrigatório.')
    .min(15, 'O telefone precisar ser um número válido.'),
};

export function CustomerRegister() {
  const theme = useTheme();

  const {
    control,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(Yup.object().shape(schema)),
    mode: 'onChange',
  });

  const handleSubmit = useCallback(async () => {
    const data = getValues();

    console.log(data);
  }, [getValues]);

  const getCompanyDataByCNPJ = useCallback(
    async (cnpj: string) => {
      // const { cnpj } = getValues();
      console.log(cnpj);
      if (cnpj.length === 18) {
        try {
          const {
            nome,
            fantasia,
            cep,
            uf,
            bairro,
            numero,
            logradouro,
            email,
            telefone,
          } = await getDataByCNPJ(cnpj);

          setValue('socialReason', nome);
          setValue('fantasyName', fantasia);

          console.log(nome);
          console.log(fantasia);
          console.log(cep);
          console.log(uf);
          console.log(bairro);
          console.log(numero);
          console.log(logradouro);
          console.log(email);
          console.log(telefone);
        } catch (err) {
          console.log(err);
        }
      }
    },
    [setValue],
  );

  return (
    <>
      <CustomHeader />
      <Container>
        <TextFormInput
          control={control as Control<any, any>}
          onChangeText={cnpj => getCompanyDataByCNPJ(cnpj)}
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
          name="socialReason"
          label="Razão Social"
          error={errors.socialReason?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          name="fantasyName"
          label="Nome Fantasia"
          error={errors.fantasyName?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          name="zipCode"
          label="CEP"
          mask="[00000]-[000]"
          keyboardType="numeric"
          error={errors.zipCode?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          name="state"
          label="Estado"
          error={errors.state?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          name="city"
          label="Cidade"
          error={errors.city?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          name="district"
          label="Bairro"
          error={errors.district?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          name="number"
          label="Número"
          keyboardType="numeric"
          error={errors.number?.message}
          primaryColor={theme.colors.purple}
        />
        <Space height={40} />
        <TextFormInput
          control={control as Control<any, any>}
          name="publicPlace"
          label="Logradouro"
          error={errors.publicPlace?.message}
          primaryColor={theme.colors.purple}
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
        <SubmitButton onPress={handleSubmit} disabled={!isValid} />
      </Container>
    </>
  );
}
