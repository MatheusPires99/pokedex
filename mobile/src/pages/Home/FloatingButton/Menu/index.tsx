import React from 'react';
import { Animated } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Text from '../../../../components/Text';
import { MENU_ITEM_TRANSLATE_X } from '../index';
import { useSearch, useFavoritePokemons } from '../../../../hooks';

import { Container, ItemButton } from './styles';

type MenuProps = {
  translateX: Animated.Value;
};

const items = [
  {
    name: 'Search',
    icon: 'search',
  },
  {
    name: 'Favorite Pokémons',
    icon: 'heart',
  },
];

const Menu = ({ translateX }: MenuProps) => {
  const { colors } = useTheme();
  const { handleToggleSearch } = useSearch();
  const { handleGetFavoritePokemons } = useFavoritePokemons();

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
      {items.map((item, index) => {
        const onPress =
          item.name === 'Search'
            ? handleToggleSearch
            : handleGetFavoritePokemons;

        return (
          <Animated.View key={index} style={{ opacity }}>
            <ItemButton onPress={onPress}>
              <Text style={{ marginRight: 8 }}>{item.name}</Text>
              <Icon name={item.icon} color={colors.lilac} size={18} />
            </ItemButton>
          </Animated.View>
        );
      })}
    </Container>
  );
};

export default Menu;
