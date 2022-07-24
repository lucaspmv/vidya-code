import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { TextInput, TextInputProps } from '..';

interface TextFormInput extends TextInputProps {
  control: Control<any, any>;
  name: string;
}

export function TextFormInput({
  control,
  name,
  label,
  ...rest
}: TextFormInput) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <TextInput label={label} onChangeText={onChange} {...rest} />
      )}
    />
  );
}
