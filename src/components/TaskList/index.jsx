import { Checked, Container, Icon, LeftSide, P, RightSide, ShowDate, Tag } from "./styles"
import { SlNote } from "react-icons/sl";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useContext, useState } from "react";
import { ToDoContext } from "../../contexts/ToDo";
import { ControlSpan, Explain, ForToDo, Inner, Input, InputDate, Outer, Textarea } from "../Modal/styles";
import { format, parseISO } from "date-fns";

const TaskList = ({id, priority, title, onClick, date, details}) =>{

    const {isDone, deleteTask, editTask} = useContext(ToDoContext)

    const [check, setCheck] = useState(false)

    const [modal, setModal] = useState(false)

    const handleCheck = () =>{
        setCheck(prev => !prev)
        isDone(id)
    }

    const handleDelete = () =>{
        deleteTask(id)
    }

    const handleEdit = () =>{
        setModal(true)
        editTask(id)
    }

    const [clickedTag, setClickedTag] = useState(priority);

    const handleClickedTag = (value) => {
        if (clickedTag === value) {
            setClickedTag('');
        } else {
            setClickedTag(value);
        }
    };

    const [taskTitle, setTaskTitle] = useState(title)
    const [taskDetails, setTaskDetails] = useState(details)
    const [taskDate, setTaskDate] = useState(date)

    const clearTaskInput = () =>{
        setTaskTitle('')
        setTaskDetails('')
        setTaskDate('')
    }

    const dateControl = (date) =>{
        const dateString = date
        const dataObject = parseISO(dateString)

        const formattedDate = format(dataObject, 'MMM do')
        return formattedDate
    }
    
    const handleTask = () =>{

        const edited = {
            title: taskTitle,
            done: false,
            details: taskDetails,
            date: taskDate,
            priority: clickedTag,
        }

        editTask(id, edited)

        clearTaskInput()

        setModal(false)
    }

    return(
    <>
        <Container $priority={priority} id = {id}>
            <RightSide>
                <Checked $check={check} onClick={handleCheck}>
                    {
                        check && <FaCheck />
                    }
                </Checked>
                <P $check={check}>{title}</P> 
            </RightSide>
            <LeftSide>
                <Tag $check={check} onClick={onClick}>DETAILS</Tag>
                <ShowDate $check={check}>{dateControl(date)}</ShowDate>
                <Icon $check={check} onClick={handleEdit}><SlNote/></Icon>
                <Icon $check={check} onClick={handleDelete}><FaTrashAlt/></Icon>
            </LeftSide>
        </Container>
        <>
                    <Outer open={modal}/>
                    <Inner open={modal}>
                    <ForToDo>
                            <Input 
                                placeholder={title} 
                                value = {taskTitle} 
                                onChange={e => setTaskTitle(e.target.value)}
                            />
                            <Textarea 
                                placeholder={details} 
                                value = {taskDetails} 
                                onChange={e => setTaskDetails(e.target.value)}
                            />
                            <div>
                                <ControlSpan>
                                    <Explain>Due Date:</Explain>
                                    <InputDate type = "date" value = {taskDate} onChange={e => setTaskDate(e.target.value)}/>
                                </ControlSpan>
                                <ControlSpan>
                                    <Explain>Priority:</Explain>
                                    <Tag onClick={() => handleClickedTag('low')} className={clickedTag === 'low' ? 'green_selected' : 'green'}>LOW</Tag>
                                    <Tag onClick={() => handleClickedTag('medium')} className={clickedTag === 'medium' ? 'yellow_selected' : 'yellow'}>MEDIUM</Tag>
                                    <Tag onClick={() => handleClickedTag('high')} className={clickedTag === 'high' ? 'red_selected' : 'red'}>HIGH</Tag>
                                </ControlSpan>
                            </div>
                            <article><Tag onClick={handleTask}>CONFIRM EDIT</Tag></article>
                        </ForToDo>
                    </Inner>
        </>
    </>
    
    )
}

export default TaskList