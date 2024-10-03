import {  Container, TextTitle, TextTitleField, Input, Fields } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

import {HeaderApp} from '../../components/Header'
import { RootNavigationProp } from "../../types/navigation";


export function FormRegisterTask() {
    const navigation = useNavigation<RootNavigationProp>();
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
            <TextTitleField>Descrição</TextTitleField>
            <Input 
            placeholder='Digite aqui...'
            placeholderTextColor="white"
            keyboardType='default'
               
        />
        </Fields>

        <ContainerButtom>
            <ButtomRegister><TextButtom>Cadastrar</TextButtom></ButtomRegister>
            <ButtomCancel><TextButtom>Cancelar</TextButtom></ButtomCancel>
        </ContainerButtom>

        </Container>
    );
}