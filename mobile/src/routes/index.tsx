import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useTheme } from 'styled-components';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

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
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default Routes;
