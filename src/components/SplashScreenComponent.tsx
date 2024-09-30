import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

interface SplashScreenProps {
    onFinish: () => void;
}

const SplashScreenComponent = ({ onFinish }: SplashScreenProps) => {
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.preventAutoHideAsync();
      // Após 2 segundos, chama a função onFinish para mudar para a tela inicial
      setTimeout(() => {
        SplashScreen.hideAsync();
        onFinish(); // Chama a função passada como prop para mudar a tela
      }, 2000);
    }

    hideSplashScreen();
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/loginImage.png')} style={styles.logo} />
      <Text style={styles.loadingText}>Bem-vindo a Lista de Tarefas!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default SplashScreenComponent;