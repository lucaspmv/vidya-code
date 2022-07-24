import React, { useCallback, useState } from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import { ErrorText, Input, InputMask, LabelText } from './styles';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  inputRef?: React.Ref<RNTextInput>;
  disabled?: boolean;
  mask?: string;
  multiline?: boolean;
  primaryColor?: string;
  error?: string;
}

export function TextInput({
  label,
  inputRef,
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
          ref={inputRef}
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
          ref={inputRef}
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
      {!!error && <ErrorText>{error}</ErrorText>}
    </>
  );
}
