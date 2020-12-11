import React, { useCallback } from 'react';
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Icon, TextInput } from './styles';

type InputProps = TextInputProps & {
  setValue: (value: string) => void;
  icon: string;
};

const Input = ({ setValue, icon, ...rest }: InputProps) => {
  const { colors } = useTheme();

  const onChange = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const value = e.nativeEvent.text;

      setValue(value);
    },
    [setValue],
  );

  return (
    <Container>
      <Icon name={icon} size={24} color={colors.black} />

      <TextInput
        keyboardAppearance="light"
        placeholderTextColor={`${colors.black}75`}
        onChange={onChange}
        {...rest}
      />
    </Container>
  );
};

export default Input;
