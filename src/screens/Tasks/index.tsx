import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../../types/navigation';


import { HeaderApp } from '../../components/Header';
import { Container, HeaderTask, InputContainer, Main, TextTitle } from './style';
import { Input } from './style';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TaskItem } from './Components/TaskItem';


export function Tasks () {
    const navigation = useNavigation<RootNavigationProp>();
    return (
        <Container>
            <HeaderApp>
                <HeaderTask>
                    <TextTitle>LISTA DE TAREFAS</TextTitle>
                    <InputContainer>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <AntDesign name="search1" size={20} color="#aaa" style={{position: 'absolute', left: 10, zIndex: 1}}/>
                            <Input placeholder='Buscar' />       
                        </View>
                        <AntDesign onPress={() => navigation.navigate('FormRegister')} name="pluscircle" size={50} color='#00B37E' />
                    </InputContainer>
                </HeaderTask>
            </HeaderApp>
            <Main>
                <TaskItem />
            </Main>
        </Container>
    )
}