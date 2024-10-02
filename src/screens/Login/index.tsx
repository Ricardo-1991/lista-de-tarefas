import { View, Image } from 'react-native';
import { LoginButton, LoginButtonText, LoginContainer, Title } from './style';
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação
import { RootNavigationProp } from '../../types/navigation'; // Importando o tipo

export function Login() {
  const navigation = useNavigation<RootNavigationProp>(); // Usando o hook com o tipo

  return (
    <LoginContainer>
      <View>
        <Title>Aqui você terá sua lista de tarefas na palma da sua mão!</Title>
      </View>
      <Image source={require('../../../assets/loginImage.png')} style={{ width: 300, height: 300 }} />
      <LoginButton onPress={() => navigation.navigate('Tasks')}>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>
    </LoginContainer>
  );
}
