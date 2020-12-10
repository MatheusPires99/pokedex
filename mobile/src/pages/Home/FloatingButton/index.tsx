import React, { useCallback, useMemo, useState } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Menu from './Menu';
import { Container, Button, OverlayBackground } from './styles';

const { width } = Dimensions.get('window');

export const MENU_ITEM_TRANSLATE_X = -width;

const FloatingButton = () => {
  const { colors } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const opacity = useMemo(() => new Animated.Value(0), []);
  const translateX = useMemo(
    () => new Animated.Value(MENU_ITEM_TRANSLATE_X),
    [],
  );

  const handleToggleMenu = useCallback(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: isMenuOpen ? 0 : 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: isMenuOpen ? MENU_ITEM_TRANSLATE_X : 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen, opacity, translateX]);

  return (
    <>
      <Container>
        <Menu translateX={translateX} />

        <Button onPress={handleToggleMenu}>
          <Icon
            name={isMenuOpen ? 'x' : 'list'}
            color={colors.white}
            size={22}
          />
        </Button>
      </Container>

      <OverlayBackground
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
          zIndex: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [-2, 2],
            extrapolate: 'clamp',
          }),
        }}
      />
    </>
  );
};

export default FloatingButton;
