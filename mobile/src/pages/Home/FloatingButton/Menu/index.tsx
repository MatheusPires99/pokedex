import React from 'react';
import { Animated } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Text from '../../../../components/Text';
import { MENU_ITEM_TRANSLATE_X } from '../index';
import { useSearch } from '../../../../hooks/search';

import { Container, ItemButton } from './styles';

type MenuProps = {
  translateX: Animated.Value;
};

const Menu = ({ translateX }: MenuProps) => {
  const { colors } = useTheme();
  const { handleToggleSearch } = useSearch();

  const transform = [
    {
      translateX: translateX.interpolate({
        inputRange: [MENU_ITEM_TRANSLATE_X, MENU_ITEM_TRANSLATE_X / 2, 0],
        outputRange: [MENU_ITEM_TRANSLATE_X, MENU_ITEM_TRANSLATE_X / 2.5, 0],
        extrapolate: 'clamp',
      }),
    },
  ];

  const opacity = translateX.interpolate({
    inputRange: [MENU_ITEM_TRANSLATE_X / 3, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <Container style={{ transform }}>
      <Animated.View style={{ transform, opacity }}>
        <ItemButton onPress={handleToggleSearch}>
          <Text style={{ marginRight: 8 }}>Search</Text>
          <Icon name="search" color={colors.lilac} size={18} />
        </ItemButton>
      </Animated.View>
    </Container>
  );
};

export default Menu;
