import React, { createContext, useEffect, useState, ReactNode } from 'react';
import api from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';


interface ChildrenProps {
    children: ReactNode
}

interface NewTaskProps {
    title: string;
    description: string;
    status: boolean;
}

interface TaskProps {
    id: string
    title: string,
    description: string,
    status: boolean
}

interface TaskContextProps {
    tasks: TaskProps[];
    addTask: (task: NewTaskProps) => void;
    deleteTask: (id: string) => void;
    checkAndUncheckTask: (id: string) => void;
    updatedTask: (title: string, description: string, taskId: string) => void;
  }

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskProvider = ({ children }: ChildrenProps) => {
    const [tasks, setTasks] = useState<TaskProps[]>([])

    // useEffect(() => {
    //     async function loadTasks(){
    //         try {
    //             const storedTasks = await AsyncStorage.getItem('@tasks')
    //             if(storedTasks){
    //                 setTasks(JSON.parse(storedTasks))
    //             }
    //         }catch(error) {
    //             console.log("Erro ao carregar tarefas", error)
    //         }
    //     }
    //     loadTasks()
    // }, [])


    // useEffect(() => {
    //     async function saveTasks() {
    //         try {
    //             await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
    //         } catch (error) {
    //             console.log('Erro ao salvar tarefas', error);
    //         }
    //     }

    //     if (tasks.length > 0) {
    //         saveTasks();
    //     }
    // }, [tasks]); 
    useEffect(() => {
         async function loadTasks() {
            try {
                const response = await api.get<TaskProps[]>('/'); // Se espera um array de tarefas
                setTasks(response.data); // Aqui você deve setar diretamente o array de tarefas
            } catch (error) {
                console.error("Erro ao carregar tarefas", error);
            }
        }
        loadTasks();
    },[])
    

    async function addTask(task: NewTaskProps){
        try {
           const response = await api.post<TaskProps>('/task', task)
           setTasks(prevTasks => [...prevTasks, response.data])
        }catch(error) {
            console.error("Erro ao adicionar a tarefa", error);
            Alert.alert("Erro ao adicionar a tarefa", "Tente novamente mais tarde.");
        }
    }

    async function deleteTask(id: string){
        try {
            await api.delete(`/task/${id}`)
            const updatedTasks = tasks.filter(task => task.id !== id)
            setTasks(updatedTasks)            
        }catch(error){
            console.error("Erro ao deletar a tarefa", error);
            Alert.alert("Erro ao deletar a tarefa", "Tente novamente mais tarde.");
        }
    }

   async function checkAndUncheckTask(id: string){
        const response = await api.put(`/task/${id}`)
        //NAO TA FEITO
        // const updatedTasks = tasks.map(task => task.id === id ? {...task, status: !task.status} : task)
        // setTasks(updatedTasks)
    }

    async function updatedTask(taskTitle: string, taskDescription: string, taskId: string) {
        try {
            const response = await api.put<TaskProps>(`/task/${taskId}`, {
                title: taskTitle,
                description: taskDescription
            });
             
            const updatedTask = tasks.map(task => task.id === response.data.id ? response.data : task);
            setTasks(updatedTask);
        } catch (error) {
            console.error("Erro ao atualizar a tarefa", error);
            Alert.alert("Erro ao atualizar a tarefa", "Tente novamente mais tarde.");
        }
    }
    

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask, checkAndUncheckTask, updatedTask}}>
            {children}
        </TaskContext.Provider>
    )
}