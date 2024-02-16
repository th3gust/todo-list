import { Checked, Container, DetailsModalInner, DetailsModalOuter, Icon, LeftSide, P, RightSide, ShowDate, Tag } from "./styles";
import { SlNote } from "react-icons/sl";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../Button"




const Task = () =>{

    const [check, setCheck] = useState(false)

    const handleCheck = () =>{
        setCheck(prev => !prev)
    }

    const [openModal, setOpenModal] = useState(false)

    const handleModalOpen = () => {
        setOpenModal(true)
    }

    const handleModalClose = () =>{
        setOpenModal(false)
    }

    return (
        <>
        <Container>
            <RightSide>
                <Checked check={check} onClick={handleCheck}>
                    {
                        check && <FaCheck />
                    }
                </Checked>
                <P check={check} >brush teeth</P> 
            </RightSide>
            <LeftSide>
                <Tag check={check} onClick={handleModalOpen}>DETAILS</Tag>
                <ShowDate check={check} >Dec 11th</ShowDate>
                <Icon check={check}><SlNote/></Icon>
                <Icon check={check}><FaTrashAlt/></Icon>
            </LeftSide>
        </Container>
        <DetailsModalOuter open={openModal}/>
        <DetailsModalInner open={openModal}>
            <h1>brush teeth</h1>
            <p><strong>Project: </strong>home</p>
            <p><strong>Priority: </strong>Low</p>
            <p><strong>Due Date: </strong>December 11th, 2021</p>
            <p><strong>Details: </strong>with colgate</p>
            <Button onClick={handleModalClose}/>
        </DetailsModalInner>
        </>
    )
}

export default Task