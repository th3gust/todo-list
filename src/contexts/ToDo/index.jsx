import { createContext, useState } from "react";

export const ToDoContext = createContext()

export const ToDoProvider = ({children}) =>{

    const [tasks, setTasks] = useState([
        {
            taskId: 0, 
            done: false,
            project: '',
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
    }

    const deleteTask = (id) => {
        const updated = tasks.filter((item) => item.taskId !== id)
        setTasks(updated)
    }

    const editTask = (id, edited) =>{
        const updated = tasks.map((task) =>{
            if (task.taskId === id){
                return {...task, ...edited}
            }
            return task
        })

        setTasks(updated)
    }

    const [projects, setProjects] = useState([{
        project: '',
        focus: false
    }])

    const newProject = (project) =>{
        setProjects(prev => [...prev, project])
    }

    
    return(
        <ToDoContext.Provider value={{tasks, addTask, detailsTask, isDone, deleteTask, editTask, projects, newProject}}>
            {children}
        </ToDoContext.Provider>
    )
}