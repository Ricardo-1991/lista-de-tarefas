import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { globalTheme } from './globalTheme';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/screens';
import SplashScreenComponent from './src/components/SplashScreenComponent'
import { TaskProvider } from './src/context/TaskContext';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const [isReady, setIsReady] = useState(false);


  const handleSplashFinish = () => {
    setIsReady(true);
  };


  if (!isReady || !fontsLoaded) {
    return <SplashScreenComponent onFinish={handleSplashFinish} />;
  }
  
  return (
    <TaskProvider>
      <ThemeProvider theme={globalTheme}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
      </ThemeProvider>
    </TaskProvider>
  );
}
