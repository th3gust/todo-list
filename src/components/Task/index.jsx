import { Checked, Container, DetailsModalInner, DetailsModalOuter, Icon, LeftSide, RightSide, ShowDate, Tag } from "./styles";
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
                <p>brush teeth</p>
            </RightSide>
            <LeftSide>
                <Tag onClick={handleModalOpen}>DETAILS</Tag>
                <ShowDate>Dec 11th</ShowDate>
                <Icon><SlNote/></Icon>
                <Icon><FaTrashAlt/></Icon>
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