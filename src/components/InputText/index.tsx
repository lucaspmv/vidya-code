import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';

import { ErrorText, Input, LabelText } from './styles';

interface InputTextProps extends TextInputProps {
  label: string;
  primaryColor?: string;
  error?: string;
}

export function InputText({
  label,
  primaryColor,
  error,
  ...rest
}: InputTextProps) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <>
      <LabelText>{label}</LabelText>
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        isActive={isActive}
        primaryColor={primaryColor}
        autoCapitalize="none"
        autoCorrect={false}
        error={!!error}
        {...rest}
      />
      {!!error && <ErrorText>Erro: {error}</ErrorText>}
    </>
  );
}
