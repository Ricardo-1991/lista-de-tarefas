import { useContext, useState } from "react";
import {  Container, TextTitle, TextTitleField, Input, Fields, ContainerButtom, ButtomRegister, TextButtom, ButtomCancel } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import {HeaderApp} from '../../components/Header'
import { RootNavigationProp } from "../../types/navigation";
import { TaskContext } from "../../context/TaskContext";
import { Alert } from "react-native";


export function FormRegisterTask() {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    
    const {addTask} = useContext(TaskContext)

    function handleTaskTitle(title: string) {
        setTaskTitle(title)
    }

    function handleTaskDescription(description: string) {
        setTaskDescription(description)
    }

    function handleAddTask () {
       if(taskTitle.length == 0 || taskDescription.length == 0) {
        return Alert.alert('Atenção', 'Preencha todos os campos')  
       }
       const uuId = uuidv4()

       const newTask = {
        id: uuId,
        title: taskTitle,
        description: taskDescription,
        status: false
       }
       
       setTaskTitle('')
       setTaskDescription('')
       addTask(newTask)
    }

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
            onChangeText={handleTaskTitle}
            value={taskTitle}
        />
        </Fields>
        <Fields>
            <TextTitleField>Descrição</TextTitleField>
            <Input 
            placeholder='Digite aqui...'
            placeholderTextColor="white"
            keyboardType='default'
            onChangeText={handleTaskDescription}
            value={taskDescription}
        />
        </Fields>

        <ContainerButtom>
            <ButtomRegister onPress={handleAddTask}><TextButtom>Cadastrar</TextButtom></ButtomRegister>
            <ButtomCancel onPress={() => navigation.goBack()}><TextButtom>Cancelar</TextButtom></ButtomCancel>
        </ContainerButtom>

        </Container>
    );
}