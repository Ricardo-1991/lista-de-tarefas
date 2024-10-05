import { useContext } from "react";
import {Alert, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação
import { RootNavigationProp } from '../../../../types/navigation'

import { CheckTaskButton, Container, ContainerTaskItem, TitleTask } from "./style";
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
    const {deleteTask, checkAndUncheckTask} = useContext(TaskContext)

    function handleDeleteTask() {
        Alert.alert(
            'Deletar Tarefa',
            'Tem certeza que deseja deletar esta tarefa?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Deletar',
                    style: 'destructive',
                    onPress: () => deleteTask(item.task.id),
                },
            ]
        );
    }

    function handleDetailTask() {
        navigation.navigate('DetailsTaskScreen', {
            currentTaskId: item.task.id
        })
    }

    function handleCheckAndUncheckTask() {
        checkAndUncheckTask(item.task.id)
    }

    return (
        <Container>
            <ContainerTaskItem status={item.task.status? 'completed' : 'incomplete'}>
                <CheckTaskButton onPress={handleCheckAndUncheckTask} status={item.task.status? 'completed' : 'incomplete'}>
                    {item.task.status && (
                     <AntDesign name="check" size={18} color="black" />
                    )}
                </CheckTaskButton>
                <TitleTask status={item.task.status? 'completed' : 'incomplete'} numberOfLines={1} ellipsizeMode="tail">{item.task.title}</TitleTask>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                    <AntDesign name="edit" onPress={handleDetailTask} size={28} color="#FFFFFF" />
                    <AntDesign name="close" onPress={handleDeleteTask} size={28} color="#FFFFFF" />
                </View>
            </ContainerTaskItem>
        </Container>
    )
}