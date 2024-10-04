import {View } from "react-native";
import { CheckTaskButton, Container, ContainerTaskItem, DescriptionTask } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';
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
 
    return (
        <Container>
            <ContainerTaskItem status={item.task.status? 'completed' : 'incomplete'}>
                <CheckTaskButton status={item.task.status? 'completed' : 'incomplete'}>
                    {item.task.status && (
                     <AntDesign name="check" size={18} color="black" />
                    )}
                </CheckTaskButton>
                <DescriptionTask status={item.task.status? 'completed' : 'incomplete'} numberOfLines={1} ellipsizeMode="tail">{item.task.description}</DescriptionTask>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                    <AntDesign name="edit" size={28} color="#FFFFFF" />
                    <AntDesign name="close" size={28} color="#FFFFFF" />
                </View>
            </ContainerTaskItem>
        </Container>
    )
}