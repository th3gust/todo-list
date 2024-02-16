import { Checked, Container, DetailsModalInner, DetailsModalOuter, Icon, LeftSide, P, RightSide, ShowDate, Tag } from "./styles";
import { SlNote } from "react-icons/sl";
import { FaTrashAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../Button"
import {ToDoContext} from "../../contexts/ToDo"


const Task = () =>{

     //control tasks map

     const {tasks, detailsTask} = useContext(ToDoContext)

    //control done att

    const [check, setCheck] = useState(false)

    const handleCheck = () =>{
        setCheck(prev => !prev)
    }

    //control modal
    const [openModal, setOpenModal] = useState(false)

    const [selectedTask, setSelectedTask] = useState({})

    const handleModalOpen = (id) => {
        setSelectedTask(detailsTask(id))
        setOpenModal(true)
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
                        <Container $priority={item.priority} id = {item.taskId} key={item.taskId}>
                            <RightSide>
                                <Checked check={check} onClick={handleCheck}>
                                    {
                                        check && <FaCheck />
                                    }
                                </Checked>
                                <P check={check}>{item.title}</P> 
                            </RightSide>
                            <LeftSide>
                                <Tag check={check} onClick={e => handleModalOpen(e.target.parentNode.parentNode.id)}>DETAILS</Tag>
                                <ShowDate check={check}>{item.date}</ShowDate>
                                <Icon check={check}><SlNote/></Icon>
                                <Icon check={check}><FaTrashAlt/></Icon>
                            </LeftSide>
                        </Container>
                    )
                })
            }

        <DetailsModalOuter open={openModal}/>
        <DetailsModalInner open={openModal}>
            <h1>{selectedTask.title}</h1>
            <p><strong>Project: </strong>home</p>
            <p><strong>Priority: </strong>{selectedTask.priority}</p>
            <p><strong>Due Date: </strong>{selectedTask.date}</p>
            <p><strong>Details: </strong>{selectedTask.details}</p>
            <Button onClick={handleModalClose}/>
        </DetailsModalInner>
        </>
    )
}

export default Task