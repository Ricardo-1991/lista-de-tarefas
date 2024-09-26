import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { globalTheme } from './globalTheme';

import { AppContainer } from './AppStyle';
import { Login } from './src/components/Login';


export default function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <AppContainer>
          <Login />
          <StatusBar style="auto" />
      </AppContainer>
      
    </ThemeProvider>
  );
}
