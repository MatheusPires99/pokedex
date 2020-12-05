import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'styled-components';

import usePokemon from '../../../hooks/pokemon';
import { POKEMON_SUMMARY_HEIGHT } from '../../../constants';
import { Pokemon } from '../../../types';
import Text from '../../../components/Text';

import tabs from './tabs';
import { Container } from './styles';

const Tab = createMaterialTopTabNavigator();

type PokemonDetailsProps = {
  translateY: Animated.Value;
  pokemon: Pokemon;
};

const PokemonDetails = ({ pokemon, translateY }: PokemonDetailsProps) => {
  const { colors } = useTheme();

  const { setPokemon } = usePokemon();

  useEffect(() => setPokemon(pokemon), [pokemon, setPokemon]);

  const containerStyle = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-POKEMON_SUMMARY_HEIGHT, 0],
          outputRange: [0, -32],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

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
                <Text
                  color={focused ? 'black' : 'grey'}
                  bold={!!focused}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  {tab.name}
                </Text>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </Container>
  );
};

export default PokemonDetails;
