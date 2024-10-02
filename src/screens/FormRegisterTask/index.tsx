import { Header , Container, TextTitle, TextTitleField, Input, Fields } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationProp } from "@react-navigation/native";

import {HeaderApp} from '../../components/Header'


type Props = {
    navigation: NavigationProp<'FormRegister'>;
  };
  

export function FormRegisterTask({navigation}: Props) {
    return (
        <Container>
            <HeaderApp>
                <AntDesign name="back" size={50} color="black" style={{
                    marginTop: 80,
                    marginLeft: 11,
                }}
                onPress={() => navigation.goBack()}
                />    
           <TextTitle>CADASTRAR</TextTitle>
            </HeaderApp>
            <Fields>
            <TextTitleField>Título</TextTitleField>
            <Input 
            placeholder='Digite aqui...'
            placeholderTextColor="white"
            keyboardType='default'
               
        />
        </Fields>
        <Fields>
            <TextTitleField>Status</TextTitleField>
            <Input 
            placeholder='Digite aqui...'
            placeholderTextColor="white"
            keyboardType='default'
               
        />
        </Fields>
        <Fields>
            <TextTitleField>Descrição</TextTitleField>
            <Input 
            placeholder='Digite aqui...'
            placeholderTextColor="white"
            keyboardType='default'
               
        />
        </Fields>

        </Container>
    );
}