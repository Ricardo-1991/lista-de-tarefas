import { Fragment, useContext, useState } from "react";
import {  Container, TextTitle, TextTitleField, Input, Fields, ContainerButtom, ButtomRegister, TextButtom, ButtomCancel } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Formik } from 'formik';
import * as Yup from 'yup'; 


import {HeaderApp} from '../../components/Header'
import { RootNavigationProp } from "../../types/navigation";
import { TaskContext } from "../../context/TaskContext";
import { Alert, Text } from 'react-native';
import { CustomButton } from "../../components/Button";

const TaskSchema = Yup.object().shape({
    title: Yup.string().required('O campo título é obrigatório'),
    description: Yup.string().required('O campo descrição é obrigatório'),
})

export function FormRegisterTask() {

    const {addTask} = useContext(TaskContext)
    function handleAddTask (values: { title: string, description: string }) {
       const uuId = uuidv4()

       const newTask = {
        id: uuId,
        title: values.title,
        description: values.description,
        status: false
       }
       
       values.title = ''
       values.description = ''
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
            <Formik initialValues={{title: '', description: ''}} validationSchema={TaskSchema} onSubmit={handleAddTask}>
            {({ handleChange, handleBlur, handleSubmit,isSubmitting, values, errors, touched }) => (
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
                         {(errors.title && touched.title) || (isSubmitting && errors.title) ? (
                                <Text style={{ color: '#FF6666', marginTop: 5, marginLeft: 12 }}>{errors.title}</Text>
                         ) : null}
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
                        {(errors.description && touched.description) || (isSubmitting && errors.description) ? (
                                <Text style={{ color: '#FF6666', marginTop: 5, marginLeft: 12 }}>{errors.description}</Text>
                        ) : null}
                    </Fields>
                    <ContainerButtom>
                        <CustomButton title="Cadastrar" backgroundColor="blue" onPress={() => handleSubmit()}></CustomButton>
                        <CustomButton title="Cancelar" backgroundColor="gray" onPress={() => navigation.goBack()}></CustomButton>
                    </ContainerButtom>
                </Fragment>
            )}
            </Formik>
        </Container>
    );
}