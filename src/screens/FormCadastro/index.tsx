import { HeaderStyle, Container, TextTitle, TextTitleField, Input, Fields } from "./style";
import {Feather} from "@expo/vector-icons";

export function FormCadastro() {
    return (
        <Container>
            <HeaderStyle>
                
           <TextTitle>Cadastro</TextTitle>
            </HeaderStyle>
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