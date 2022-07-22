import React from 'react';
import { TextInputProps } from 'react-native';

import { Input, LabelText } from './styles';

interface InputTextProps extends TextInputProps {
  label: string;
}

export function InputText({ label, ...rest }: InputTextProps) {
  return (
    <>
      <LabelText>{label}</LabelText>
      <Input {...rest} />
    </>
  );
}
