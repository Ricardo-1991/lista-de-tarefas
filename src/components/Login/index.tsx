import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LoginButton, LoginButtonText, LoginContainer, Title } from './style';



export function Login() {
    return (
        <LoginContainer>
            <View>
                <Title>Aqui você terá sua lista de tarefas na palma da sua mão!</Title>
            </View>
            <Image source={require('../../../assets/loginImage.png')} style={{width: 300, height: 300}} />
            <LoginButton>
                <LoginButtonText>Entrar</LoginButtonText>
            </LoginButton>
        </LoginContainer>
    );
}
