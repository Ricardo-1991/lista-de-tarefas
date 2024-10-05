import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { Alert } from 'react-native';


interface ChildrenProps {
    children: ReactNode
}

interface TaskProps {
    id: string,
    title: string,
    description: string,
    status: boolean
}

interface TaskContextProps {
    tasks: TaskProps[];
    addTask: (task: TaskProps) => void;
    deleteTask: (id: string) => void;
    checkAndUncheckTask: (id: string) => void;
    updatedTask: (title: string, description: string, taskId: string) => void;
  }

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskProvider = ({ children }: ChildrenProps) => {
    const [tasks, setTasks] = useState<TaskProps[]>([])

    useEffect(() => {
        async function loadTasks(){
            try {
                const storedTasks = await AsyncStorage.getItem('@tasks')
                if(storedTasks){
                    setTasks(JSON.parse(storedTasks))
                }
            }catch(error) {
                console.log("Erro ao carregar tarefas", error)
            }
        }
        loadTasks()
    }, [])


    useEffect(() => {
        async function saveTasks() {
            try {
                await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
            } catch (error) {
                console.log('Erro ao salvar tarefas', error);
            }
        }

        if (tasks.length > 0) {
            saveTasks();
        }
    }, [tasks]); 

    function addTask(task: TaskProps){
        const taskExists = tasks.some(existingTask => existingTask.title === task.title)
        if(taskExists){
            return Alert.alert("Essa tarefa já foi cadastrada! Cadastre uma tarefa diferente.")   
        }
        setTasks(prevTasks => [...prevTasks, task])

        Alert.alert("Tarefa adicionada com sucesso!")
    }

    function deleteTask(id: string){
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks);  
    }

    function checkAndUncheckTask(id: string){
        const updatedTasks = tasks.map(task => task.id === id ? {...task, status: !task.status} : task)
        setTasks(updatedTasks)
    }

    function updatedTask(taskTitle: string, taskDescription: string, taskId: string){
        const updatedTasks = tasks.map(task => task.id === taskId ? {...task, title: taskTitle, description: taskDescription} : task)
        setTasks(updatedTasks)
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask, checkAndUncheckTask, updatedTask}}>
            {children}
        </TaskContext.Provider>
    )
}