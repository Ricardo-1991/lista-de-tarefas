import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { globalTheme } from './globalTheme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppContainer } from './AppStyle';
import { Login } from './src/components/Login';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={globalTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
