import { createContext, useEffect, useState } from "react";

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
    const [projects, setProjects] = useState([''])
    const [selectedProject, setSelectProject] = useState('') 
    const [countProjects, setCountProjects] = useState({})

    const counter = () =>{
        const count = {}
        tasks.forEach(({project}) =>{
            count[project] = (count[project] || 0) + 1
        })
        setCountProjects(count)
    }

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

   
    
    const newProject = (project) =>{
        setProjects(prev => [...prev, project])
    }

    const selection = (name) =>{
        setSelectProject(name)
    }

    return(
        <ToDoContext.Provider value={{tasks, addTask, detailsTask, isDone, deleteTask, editTask, projects, selectedProject, newProject, selection, countProjects,counter}}>
            {children}
        </ToDoContext.Provider>
    )
}