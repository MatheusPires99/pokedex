import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Icon, TextInput } from './styles';

type InputProps = TextInputProps & {
  setValue: (value: string) => void;
  icon: string;
};

const Input = ({ setValue, icon, ...rest }: InputProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Icon name={icon} size={24} color={colors.black} />

      <TextInput
        keyboardAppearance="light"
        placeholderTextColor={`${colors.black}75`}
        onChangeText={setValue}
        {...rest}
      />
    </Container>
  );
};

export default Input;
