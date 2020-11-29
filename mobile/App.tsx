import React from 'react';
import { Text, View } from 'react-native';
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#FFF" translucent />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontFamily: 'Montserrat_700Bold' }}>
          Hello World
        </Text>
      </View>
    </>
  );
};

export default App;
