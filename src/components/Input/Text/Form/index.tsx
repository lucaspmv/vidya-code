import React, { useCallback } from 'react';
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
  onChangeText,
  ...rest
}: TextFormInput) {
  const onChangeValue = useCallback(
    (onChangeForm: (value: any) => void, text: string) => {
      onChangeForm(text);
      if (onChangeText) {
        onChangeText(text);
      }
    },
    [onChangeText],
  );

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInput
          label={label}
          value={value}
          onChangeText={text => onChangeValue(onChange, text)}
          {...rest}
        />
      )}
    />
  );
}
