import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'styled-components';

import tabs from './tabs';
import { Container, TabLabel } from './styles';

const Tab = createMaterialTopTabNavigator();

const PokemonDetails = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Tab.Navigator
        backBehavior="none"
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: colors.blue,
            height: 2,
          },
          contentContainerStyle: {
            paddingTop: 48,
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
