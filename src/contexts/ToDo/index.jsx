import { createContext, useState } from "react";

export const ToDoContext = createContext()

export const ToDoProvider = ({children}) =>{
    const [tasks, setTasks] = useState([
        {
            taskId: 0, 
            done: false,
            title: '',
            details: '', 
            date: '', 
            priority: ''
        }
    ])

    const addTask = (newTask) =>{
        setTasks(prev => [...prev, newTask])
    }

    return(
        <ToDoContext.Provider value={{tasks, addTask}}>
            {children}
        </ToDoContext.Provider>
    )
}