import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { globalTheme } from './globalTheme';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/screens';
import SplashScreenComponent from './src/components/SplashScreenComponent'
import { useFonts } from 'expo-font';


export default function App() {
  const [isReady, setIsReady] = useState(false);

  // Função chamada para mudar para a tela inicial
  const handleSplashFinish = () => {
    setIsReady(true);
  };

  // Mostra a tela de splash enquanto o app não estiver pronto
  if (!isReady) {
    return <SplashScreenComponent onFinish={handleSplashFinish} />;
  }
  
  return (
    <ThemeProvider theme={globalTheme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </ThemeProvider>
  );
}
