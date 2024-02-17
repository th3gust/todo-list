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

    const detailsTask = (id) =>{
        return tasks[id]
    }

    const isDone = (id) =>{
        const updatedTasks = tasks.map((task) =>{
            if (task.taskId === id){
                return {...task, done: !task.done}
            }
            return task
        })

        setTasks(updatedTasks)
        console.log(tasks)
    }

    return(
        <ToDoContext.Provider value={{tasks, addTask, detailsTask, isDone}}>
            {children}
        </ToDoContext.Provider>
    )
}