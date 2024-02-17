
import { useContext, useState } from "react";
import Mark from "../Mark";
import Modal from "../Modal";
import { Container, ListItem, TaskList } from "./styles";
import { ToDoContext } from "../../contexts/ToDo";
import ProjectsList from "../ProjectsList";

const Nav = ({variant}) =>{
    
    const {projects, selectedProject} = useContext(ToDoContext)

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
        selectedProject(value)
    }


    return (
        <Container>
            <TaskList>
                <ListItem onClick={() => handleClicked('home')} $isclicked={isclicked.includes('home')}>Home <Mark number="1"/></ListItem>
                <ListItem onClick={() => handleClicked('today')} $isclicked={isclicked.includes('today')}>Today <Mark number="1"/></ListItem>
                <ListItem onClick={() => handleClicked('week')} $isclicked={isclicked.includes('week')}>Week <Mark number="1"/></ListItem>
                <ListItem $variant>Projects
                    <TaskList $variant>

                        {
                            projects.map((item,index) =>{
                                return (
                                    <ProjectsList
                                        key={index}
                                        title={item}
                                        onClick={() => handleClicked(item)}
                                        isclicked={isclicked.includes(item)}
                                    />
                                )
                            })
                        }
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