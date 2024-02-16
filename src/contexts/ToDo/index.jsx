import { createContext, useState } from "react";

export const ToDoContext = createContext()

export const ToDoProvider = ({children}) =>{
    const [tasks, setTasks] = useState([
        {
            id: 0, 
            done: false, 
            title: '', 
            date: '', 
            project: '', 
            priority: ''
        }
    ])

    

    return(
        <ToDoContext.Provider>
            {children}
        </ToDoContext.Provider>
    )
}