import {Alert, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação
import { RootNavigationProp } from '../../../../types/navigation'

import { CheckTaskButton, Container, ContainerTaskItem, DescriptionTask } from "./style";
import { useContext } from "react";
import { TaskContext } from "../../../../context/TaskContext";

interface TaskProps {
    task: {
        description: string,
        id: string,
        status: boolean,
        title: string
    }
}

export function TaskItem(item: TaskProps) {
    const navigation = useNavigation<RootNavigationProp>()
    const {deleteTask} = useContext(TaskContext)

    function handleDeleteTask() {
        Alert.alert(
            'Deletar Tarefa',
            'Tem certeza que deseja deletar esta tarefa?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel', // Nenhuma ação ocorre ao clicar em "Cancelar"
                },
                {
                    text: 'Deletar',
                    style: 'destructive',
                    onPress: () => deleteTask(item.task.id), // Apenas ao pressionar "Deletar" a tarefa é removida
                },
            ]
        );
    }

    function handleDetailTask() {
        navigation.navigate('DetailsTask', {
            task: item.task
        })
    }

    return (
        <Container>
            <ContainerTaskItem status={item.task.status? 'completed' : 'incomplete'}>
                <CheckTaskButton status={item.task.status? 'completed' : 'incomplete'}>
                    {item.task.status && (
                     <AntDesign name="check" size={18} color="black" />
                    )}
                </CheckTaskButton>
                <DescriptionTask status={item.task.status? 'completed' : 'incomplete'} numberOfLines={1} ellipsizeMode="tail">{item.task.title}</DescriptionTask>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                    <AntDesign name="edit" onPress={handleDetailTask} size={28} color="#FFFFFF" />
                    <AntDesign name="close" onPress={handleDeleteTask} size={28} color="#FFFFFF" />
                </View>
            </ContainerTaskItem>
        </Container>
    )
}