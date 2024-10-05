import { useContext, useState } from 'react';
import {Alert, Modal} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

import {
    Container, 
    ContainerButtom, 
    ContainerTasks,
    Fields, 
    Input, 
    ModalBackground, 
    ModalButton, 
    ModalContainer, 
    TextSubTitle, 
    TextTask, 
    TextTitle, 
    TextTitleField 
} from './style';

import {HeaderApp} from '../../components/Header'
import { RootNavigationProp } from "../../types/navigation";
import { CustomButton } from '../../components/Button';
import { TaskContext } from '../../context/TaskContext';

export function DetailsTask(){
    const [modalVisible, setModalVisible] = useState(false);

    const route = useRoute();
    const navigation = useNavigation<RootNavigationProp>();

    const {updatedTask, tasks} = useContext(TaskContext);

    const {currentTaskId} = route.params as { currentTaskId: string };

    const currentTask = tasks.find(task => task.id === currentTaskId);

    const [taskTitle, setTaskTitle] = useState(currentTask?.title || '');
    const [taskDescription, setTaskDescription] = useState(currentTask?.description || '');
    
    function handleTaskTitle(title: string) {
        setTaskTitle(title)
    }

    function handleTaskDescription(description: string) {
        setTaskDescription(description)
    }

    function handleEditTask() {
        Alert.alert(
            'Atualizar Tarefa',
            'Tem certeza que deseja atualizar esta tarefa?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    style: 'destructive',
                    onPress: () => {
                        updatedTask(taskTitle, taskDescription, currentTask?.id || '');
                        setModalVisible(false);
                    }
                },
            ]
        );
    }

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
                    <TextSubTitle>{currentTask?.title}</TextSubTitle>
                </ContainerTasks>

                <ContainerTasks>
                    <TextTask>Status</TextTask>
                    <TextSubTitle>{currentTask?.status ? 'Concluído' : 'Pendente'}</TextSubTitle>
                </ContainerTasks>

                <ContainerTasks>
                    <TextTask>Descrição</TextTask>
                    <TextSubTitle>{currentTask?.description}</TextSubTitle>
                </ContainerTasks>
                
                <ContainerButtom>
                    <CustomButton title="Editar" backgroundColor='blue' onPress={() => setModalVisible(true)}></CustomButton>
                    <CustomButton title="Fechar" backgroundColor='gray' onPress={() => navigation.goBack()}></CustomButton>
                </ContainerButtom>

                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
            >
                <ModalBackground>
                    <ModalContainer>
                        <ModalButton  onPress={() => setModalVisible(false)} >
                             <AntDesign name="close" size={16} color="black" />
                        </ModalButton>
                        <TextTitleField>EDITAR TAREFA</TextTitleField>
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
                        <CustomButton title="Confirmar" backgroundColor='blue' onPress={handleEditTask}></CustomButton>
                    </ModalContainer>
                </ModalBackground>
            </Modal>
        </Container>
    )
}