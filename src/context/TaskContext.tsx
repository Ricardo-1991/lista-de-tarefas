import React, { createContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Alert } from 'react-native';


interface ChildrenProps {
    children: ReactNode
}

interface TaskProps {
    id: string,
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
    const uuId: string = uuidv4();

    function addTask(task: TaskProps){
        const taskExists = tasks.some(existingTask => existingTask.id === task.id)
        if(taskExists){
            return Alert.alert("Essa tarefa já foi cadastrada!")   
        }

        setTasks(prevTasks => [...prevTasks, {
            id: uuId,
            description: task.description,
            status: false
        }])
    }

    function deleteTask(id: string){
        Alert.alert('Deletar Tarefa', 'Tem certeza que deseja deletar esta tarefa?', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {   
                text: 'Deletar',
                onPress: () => {
                    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
                },
                style: 'destructive'
            }
        ])
    }


    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )



}