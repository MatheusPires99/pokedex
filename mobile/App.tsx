import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import Routes from './src/routes';
import AppProvider from './src/hooks';

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#FFF" translucent />

      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
