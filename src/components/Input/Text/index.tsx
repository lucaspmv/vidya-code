import React, { useCallback, useState } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

import { ErrorText, Input, InputMask, LabelText } from './styles';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  disabled?: boolean;
  mask?: string;
  multiline?: boolean;
  primaryColor?: string;
  error?: string;
}

export function TextInput({
  label,
  disabled = false,
  mask,
  multiline,
  primaryColor,
  error,
  ...rest
}: TextInputProps) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <>
      <LabelText error={!!error}>{label}</LabelText>
      {!mask ? (
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          isActive={isActive}
          editable={!disabled}
          disabled={disabled}
          multiline={multiline}
          primaryColor={primaryColor}
          autoCapitalize="none"
          autoCorrect={false}
          error={!!error}
          {...rest}
        />
      ) : (
        <InputMask
          onFocus={handleFocus}
          onBlur={handleBlur}
          mask={mask}
          isActive={isActive}
          editable={!disabled}
          disabled={disabled}
          primaryColor={primaryColor}
          autoCapitalize="none"
          autoCorrect={false}
          error={!!error}
          {...rest}
        />
      )}
      {!!error && <ErrorText>Erro: {error}</ErrorText>}
    </>
  );
}
