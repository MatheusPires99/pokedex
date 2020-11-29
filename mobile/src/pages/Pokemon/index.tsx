import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'styled-components';

// import { Container } from './styles';

const Pokemon = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{ fontSize: 24, color: colors.blue, fontFamily: fonts.bold }}
      >
        Pokemon
      </Text>
    </View>
  );
};

export default Pokemon;
