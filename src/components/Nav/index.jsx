
import { useState } from "react";
import Mark from "../Mark";
import Modal from "../Modal";
import { Container, ListItem, TaskList } from "./styles";

const Nav = ({variant}) =>{

    const [openModal, setOpenModal] = useState(false)
    
    const handleModalOpen = () => setOpenModal(true)
    const handleModalClose = () => setOpenModal(false)

    const [isclicked, setisclicked] = useState([])

    const handleClicked = (value) =>{
        if (isclicked.includes(value)){
            setisclicked(isclicked.filter((item => item !== value)))
        } else{
            setisclicked([value])
        }
    }

    return (
        <Container>
            <TaskList>
                <ListItem onClick={() => handleClicked('home')} $isclicked={isclicked.includes('home')}>Home <Mark number="1"/></ListItem>
                <ListItem onClick={() => handleClicked('today')} $isclicked={isclicked.includes('today')}>Today <Mark number="1"/></ListItem>
                <ListItem onClick={() => handleClicked('week')} $isclicked={isclicked.includes('week')}>Week <Mark number="1"/></ListItem>
                <ListItem $variant>Projects
                    <TaskList $variant>
                        <ListItem onClick={() => handleClicked('gym')} $isclicked={isclicked.includes('gym')}>Gym <Mark number="1"/></ListItem>
                        <ListItem onClick={() => handleClicked('study')} $isclicked={isclicked.includes('study')}>Study <Mark number="1"/></ListItem>
                        <ListItem onClick={() => handleClicked('work')} $isclicked={isclicked.includes('work')}>Work <Mark number="1"/></ListItem>
                    </TaskList>
                </ListItem>
                <ListItem onClick={() => handleClicked('todo')} $isclicked={isclicked.includes('todo')}>Notes</ListItem>
            </TaskList>
            <Mark onClick={handleModalOpen} number="+" variant/>
            <Modal open={openModal} closeModal = {handleModalClose}/>
        </Container>
    )
}

export default Nav