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
    // updateTaskStatus: (id: string) => void;
  }

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskProvider = ({ children }: ChildrenProps) => {
    const [tasks, setTasks] = useState<TaskProps[]>([])

    function addTask(task: TaskProps){
        const taskExists = tasks.some(existingTask => existingTask.id === task.id)
        if(taskExists){
            return Alert.alert("Essa tarefa já foi cadastrada!")   
        }
        Alert.alert("Tarefa cadastrada com sucesso!")
        setTasks(prevTasks => [...prevTasks, task])
    }

    function deleteTask(id: string){
        
    const updatedTasks = tasks.filter(task => task.id !== id)
    
    setTasks(updatedTasks);
             
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}