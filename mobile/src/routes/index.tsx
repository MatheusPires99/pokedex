import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

const Auth = createStackNavigator();

const AuthRoute: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Auth.Screen name="Home" component={Home} />
      <Auth.Screen name="Pokemon" component={Pokemon} />
    </Auth.Navigator>
  );
};

export default AuthRoute;
