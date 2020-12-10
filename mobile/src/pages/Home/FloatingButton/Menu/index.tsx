import React from 'react';
import { Animated } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Text from '../../../../components/Text';
import { MENU_ITEM_TRANSLATE_X } from '../index';

import { Container, ItemButton } from './styles';

const items = [{ text: 'Search', icon: 'search' }];

type MenuProps = {
  translateX: Animated.Value;
};

const Menu = ({ translateX }: MenuProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      {items.map((item, index) => (
        <Animated.View
          key={index}
          style={{
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [MENU_ITEM_TRANSLATE_X, 0],
                  outputRange: [(MENU_ITEM_TRANSLATE_X / 2) * (index + 1), 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
            opacity: translateX.interpolate({
              inputRange: [MENU_ITEM_TRANSLATE_X / 2, 0],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          }}
        >
          <ItemButton onPress={() => console.log(index)}>
            <Text style={{ marginRight: 8 }}>{item.text}</Text>
            <Icon name={item.icon} color={colors.lilac} size={18} />
          </ItemButton>
        </Animated.View>
      ))}
    </Container>
  );
};

export default Menu;
