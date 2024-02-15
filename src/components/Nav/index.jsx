
import { useState } from "react";
import Mark from "../Mark";
import Modal from "../Modal";
import { Container, ListItem, TaskList } from "./styles";

const Nav = ({variant}) =>{

    const [openModal, setOpenModal] = useState(false)
    
    const handleModalOpen = () => setOpenModal(true)
    const handleModalClose = () => setOpenModal(false)

    return (
        <Container>
            <TaskList>
                <ListItem>Home <Mark number="1"/></ListItem>
                <ListItem>Today <Mark number="1"/></ListItem>
                <ListItem>Week <Mark number="1"/></ListItem>
                <ListItem $variant>Projects
                    <TaskList $variant>
                        <ListItem>Gym <Mark number="1"/></ListItem>
                        <ListItem>Study <Mark number="1"/></ListItem>
                        <ListItem>Work <Mark number="1"/></ListItem>
                    </TaskList>
                </ListItem>
                <ListItem>Notes</ListItem>
            </TaskList>
            <Mark onClick={handleModalOpen} number="+" variant/>
            <Modal open={openModal} closeModal = {handleModalClose}/>
        </Container>
    )
}

export default Nav