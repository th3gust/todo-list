import { DetailsModalInner, DetailsModalOuter} from "./styles";

import { useContext, useState } from "react";

import Button from "../Button"
import {ToDoContext} from "../../contexts/ToDo"
import TaskList from "../TaskList";
import { format, parseISO } from "date-fns";


const Task = () =>{

     //control tasks map

     const {tasks, detailsTask} = useContext(ToDoContext)


    //control modal
    const [openModal, setOpenModal] = useState(false)

    const [selectedTask, setSelectedTask] = useState({})

    const handleModalOpen = (e) => {
        const id = e.target.parentNode.parentNode.id
        setOpenModal(true)
        setSelectedTask(detailsTask(id))
    }

    const handleModalClose = () =>{
        setOpenModal(false)
    }

    const dateControl = (date) =>{
        if (date === undefined){
            return date
        }
        const dateString = date
        const dataObject = parseISO(dateString)
        const formattedDate = format(dataObject, 'dd MMM yyyy')
        return formattedDate
    }

    return (
        <>
            {
                tasks.map((item) => {
                    return item.taskId===0? null:
                    (
                        <TaskList
                            key={item.taskId}
                            id={item.taskId}
                            priority={item.priority}
                            title={item.title}
                            details = {item.details}
                            date={item.date}
                            onClick={e => handleModalOpen(e)}
                        />
                    )
                })
            }

        <DetailsModalOuter open={openModal}/>
        <DetailsModalInner open={openModal}>
            <h1>{selectedTask.title}</h1>
            <p><strong>Project: </strong>{selectedTask.project}</p>
            <p><strong>Priority: </strong>{selectedTask.priority}</p>
            <p><strong>Due Date: </strong>{dateControl(selectedTask.date)}</p>
            <p><strong>Details: </strong>{selectedTask.details}</p>
            <Button onClick={handleModalClose}/>
        </DetailsModalInner>
        </>
    )
}

export default Task