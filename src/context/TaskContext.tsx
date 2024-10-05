import React, { createContext, useState, ReactNode } from 'react';
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

    function addTask(task: TaskProps){
        const taskExists = tasks.some(existingTask => existingTask.title === task.title)
        if(taskExists){
            return Alert.alert("Essa tarefa já foi cadastrada! Cadastre uma tarefa diferente.")   
        }
        Alert.alert("Tarefa cadastrada com sucesso!")
        setTasks(prevTasks => [...prevTasks, task])
    }

    function deleteTask(id: string){
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks);   
    }

    function checkAndUncheckTask(id: string){
        const updatedTask = tasks.map(task => task.id === id ? {...task, status: !task.status} : task)
        setTasks(updatedTask)
    }

    function updatedTask(taskTitle: string, taskDescription: string, taskId: string){
        const updatedTask = tasks.map(task => task.id === taskId ? {...task, title: taskTitle, description: taskDescription} : task)
        setTasks(updatedTask)
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask, checkAndUncheckTask, updatedTask}}>
            {children}
        </TaskContext.Provider>
    )
}