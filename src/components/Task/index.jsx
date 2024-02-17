import { DetailsModalInner, DetailsModalOuter} from "./styles";

import { useContext, useState } from "react";

import Button from "../Button"
import {ToDoContext} from "../../contexts/ToDo"
import TaskList from "../TaskList";


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
            <p><strong>Due Date: </strong>{selectedTask.date}</p>
            <p><strong>Details: </strong>{selectedTask.details}</p>
            <Button onClick={handleModalClose}/>
        </DetailsModalInner>
        </>
    )
}

export default Task