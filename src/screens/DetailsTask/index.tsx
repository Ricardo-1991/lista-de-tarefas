import { Fragment, useContext, useState } from 'react';
import { Alert, Modal, View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Formik } from 'formik';
import * as Yup from 'yup'; 

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

const TaskSchema = Yup.object().shape({
    title: Yup.string().required('O campo título é obrigatório'),
    description: Yup.string().required('O campo descrição é obrigatório'),
})

export function DetailsTask(){
    const [modalVisible, setModalVisible] = useState(false);

    const route = useRoute();
    const navigation = useNavigation<RootNavigationProp>();

    const {updatedTask, tasks} = useContext(TaskContext);

    const {currentTaskId} = route.params as { currentTaskId: string };

    const currentTask = tasks.find(task => task.id === currentTaskId);

    function handleEditTask(values: { title?: string, description?: string }) {
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
                        updatedTask(values.title || '', values.description || '', currentTask?.id || '');
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
                        <ModalButton onPress={() => setModalVisible(false)}>
                            <AntDesign name="close" size={16} color="black" />
                        </ModalButton>
                        <TextTitleField>EDITAR TAREFA</TextTitleField>
                        <Formik
                            initialValues={{ title: currentTask?.title, description: currentTask?.title }}
                            validationSchema={TaskSchema}
                            onSubmit={(values) => handleEditTask(values)} // Passa os valores editados
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <Fragment>
                                    <Fields>
                                        <TextTitleField>Título</TextTitleField>
                                        <Input
                                            placeholder='Digite aqui...'
                                            placeholderTextColor="white"
                                            keyboardType='default'
                                            onChangeText={handleChange('title')}
                                            onBlur={handleBlur('title')}
                                            value={values.title} 
                                        />
                                        {touched.title && errors.title && (
                                            <Text style={{ color: '#FF6666', marginTop: 5  }}>{errors.title}</Text>
                                        )}
                                    </Fields>

                                    <Fields>
                                        <TextTitleField>Descrição</TextTitleField>
                                        <Input
                                            placeholder='Digite aqui...'
                                            placeholderTextColor="white"
                                            keyboardType='default'
                                            onChangeText={handleChange('description')}
                                            onBlur={handleBlur('description')} 
                                            value={values.description} 
                                        />
                                        {touched.description && errors.description && (
                                            <Text style={{ color: '#FF6666', marginTop: 5 }}>{errors.description}</Text>
                                        )}
                                    </Fields>

                                    <CustomButton title="Confirmar" backgroundColor='blue' onPress={() => handleSubmit()} />
                                </Fragment>
                            )}
                    </Formik>
                </ModalContainer>
            </ModalBackground>
        </Modal>
    </Container>
    )
}