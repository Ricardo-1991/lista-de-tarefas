import { Header , Container, TextTitle, TextTitleField, Input, Fields } from "./style";
import {Feather} from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationProp } from "@react-navigation/native";

type Props = {
    navigation: NavigationProp<'FormRegister'>;
  };
  

export function FormRegisterTask({navigation}: Props) {
    return (
        <Container>
            <Header>
            <AntDesign name="back" size={50} color="black" style={{
                marginTop: 80,
                marginLeft: 11,
            }}
            onPress={() => navigation.goBack()}
            />    
           <TextTitle>CADASTRAR</TextTitle>
            </Header>
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