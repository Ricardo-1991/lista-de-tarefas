import { View, Image } from 'react-native';
import { LoginButton, LoginButtonText, LoginContainer, Title } from './style';
import { NavigationProp } from '../../types/navigation';

type Props = {
    navigation: NavigationProp<'Auth'>;
  };
  
export function Login({navigation}: Props) {
    return (
        <LoginContainer>
            <View>
                <Title>Aqui você terá sua lista de tarefas na palma da sua mão!</Title>
            </View>
            <Image source={require('../../../assets/loginImage.png')} style={{width: 300, height: 300}} />
            <LoginButton>
                <LoginButtonText onPress={() => navigation.navigate("FormRegister")}>Entrar</LoginButtonText>
            </LoginButton>
        </LoginContainer>
    );
}

