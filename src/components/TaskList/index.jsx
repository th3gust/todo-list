import { Checked, Container, Icon, LeftSide, P, RightSide, ShowDate, Tag } from "./styles"
import { SlNote } from "react-icons/sl";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useContext, useState } from "react";
import { ToDoContext } from "../../contexts/ToDo";

const TaskList = ({id, priority, title, onClick, date}) =>{

    const {isDone} = useContext(ToDoContext)

    const [check, setCheck] = useState(false)

    const handleCheck = () =>{
        setCheck(prev => !prev)
        isDone(id)
    }

    return(
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
            <ShowDate $check={check}>{date}</ShowDate>
            <Icon $check={check}><SlNote/></Icon>
            <Icon $check={check}><FaTrashAlt/></Icon>
        </LeftSide>
    </Container>
    )
}

export default TaskList