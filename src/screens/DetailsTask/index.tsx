import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Container, ContainerTasks, TextSubTitle, TextTask, TextTitle } from './style';

import {HeaderApp} from '../../components/Header'
import { RootNavigationProp } from "../../types/navigation";
import { LoginContainer } from '../Home/style';


export function DetailsTask(){
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
                <TextTitle>DETALHES</TextTitle>
            </HeaderApp>

                <ContainerTasks>
                <TextTask>Tarefa</TextTask>
                <TextSubTitle>Estudar React</TextSubTitle>
                </ContainerTasks>

                <ContainerTasks>
                <TextTask>Status</TextTask>
                <TextSubTitle>Concluido</TextSubTitle>
                </ContainerTasks>

                <ContainerTasks>
                <TextTask>Descrição</TextTask>
                <TextSubTitle>Como instalar o ambiente</TextSubTitle>
                </ContainerTasks>
            

        </Container>
    )
}