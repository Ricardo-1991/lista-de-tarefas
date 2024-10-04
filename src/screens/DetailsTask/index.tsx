import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';

import { Container, ContainerTasks, TextSubTitle, TextTask, TextTitle } from './style';
import {HeaderApp} from '../../components/Header'
import { RootNavigationProp } from "../../types/navigation";

interface TaskDetailProps {
    task: {
      description: string;
      id: string;
      status: boolean;
      title: string;
    }
  }
  

export function DetailsTask(){
    const navigation = useNavigation<RootNavigationProp>();
    const route = useRoute();

    const {task} = route.params as TaskDetailProps;

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
                <TextTask>Título</TextTask>
                <TextSubTitle>{task.title}</TextSubTitle>
                </ContainerTasks>

                <ContainerTasks>
                <TextTask>Status</TextTask>
                <TextSubTitle>{task.status ? 'Concluído' : 'Pendente'}</TextSubTitle>
                </ContainerTasks>

                <ContainerTasks>
                <TextTask>Descrição</TextTask>
                <TextSubTitle>{task.description}</TextSubTitle>
                </ContainerTasks>
        </Container>
    )
}