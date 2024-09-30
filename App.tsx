import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { globalTheme } from './globalTheme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppContainer } from './AppStyle';
import { Login } from './src/screens/Login';
import { FormRegisterTask } from './src/screens/FormRegisterTask';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { RootNavigator } from './src/screens';


export default function App() {

  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={globalTheme}>
      <NavigationContainer>
          <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
