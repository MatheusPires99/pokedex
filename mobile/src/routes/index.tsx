import React from 'react';
import { Route } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useTheme } from 'styled-components';

import Home from '../pages/Home';
import Pokemon, { RouteParams } from '../pages/Pokemon';

const Stack = createSharedElementStackNavigator();

const Routes = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        sharedElementsConfig={(route: Route<string, object | undefined>) => {
          const { pokemon } = route.params as RouteParams;

          return [`pokemon.${pokemon.id}`];
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
