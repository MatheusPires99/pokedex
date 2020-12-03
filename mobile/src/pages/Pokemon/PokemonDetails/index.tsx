import React, { useEffect } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'styled-components';

import usePokemon from '../../../hooks/pokemon';
import { POKEMON_SUMMARY_HEIGHT } from '../../../constants';
import { Pokemon } from '../../../types';

import tabs from './tabs';
import { Container, TabLabel } from './styles';

const Tab = createMaterialTopTabNavigator();

type PokemonDetailsProps = {
  translateY: Animated.SharedValue<number>;
  pokemon: Pokemon;
};

const PokemonDetails = ({ pokemon, translateY }: PokemonDetailsProps) => {
  const { colors } = useTheme();

  const { setPokemon } = usePokemon();

  useEffect(() => setPokemon(pokemon), [pokemon, setPokemon]);

  const containerStyle = useAnimatedStyle(() => {
    return {
      paddingTop: interpolate(
        translateY.value,
        [0, -POKEMON_SUMMARY_HEIGHT],
        [32, 16],
        Extrapolate.CLAMP,
      ),
      marginTop: interpolate(
        translateY.value,
        [0, -POKEMON_SUMMARY_HEIGHT],
        [-48, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Container style={containerStyle}>
      <Tab.Navigator
        backBehavior="none"
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: colors.blue,
            height: 2,
          },
          style: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarLabel: ({ focused }) => (
                <TabLabel
                  focused={focused}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  {tab.name}
                </TabLabel>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </Container>
  );
};

export default PokemonDetails;
