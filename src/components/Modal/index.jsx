import { Container, ForNotes, ForProjects, Inner, InnerNav, Input, ModalList, ModalListItem, Outer, RightSide, Tag, Textarea} from "./styles";
import Header from "../Header";
import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/Notes";


const Modal = ({open=false, closeModal}) =>{
    
    const [isclicked, setisclicked] = useState([])

    const handleClicked = (value) =>{
        if (isclicked.includes(value)){
            setisclicked(isclicked.filter((item => item !== value)))
        } else{
            setisclicked([value])
        }
    }

    const {notesArr, addNote} = useContext(NotesContext)
    const [titleNote, setTitleNote] = useState('')
    const [detailsNote, setDetailsNote] = useState('')

    const clearInput = () =>{
        setTitleNote('')
        setDetailsNote('')
    }

    const handleNotes = () =>{
    
        const newNote = {
            noteId: notesArr.length > 0 ? notesArr[notesArr.length - 1].noteId + 1 : 0,
            title: titleNote,
            details: detailsNote
        };

        addNote(newNote)

        clearInput();

        closeModal()
    }    

    return(
        <>
            <Outer open={open}></Outer>
            <Inner open={open}>
                <Header inner onClick={closeModal}/>
                <Container>
                    <InnerNav>
                        <ModalList>
                            <ModalListItem onClick={() => handleClicked('todo')} $isclicked={isclicked.includes('todo')}>To Do</ModalListItem>
                            <ModalListItem onClick={() => handleClicked('project')} $isclicked={isclicked.includes('project')}>Project</ModalListItem>
                            <ModalListItem onClick={() => handleClicked('note')} $isclicked={isclicked.includes('note')}>Note</ModalListItem>
                        </ModalList>
                    </InnerNav>
                    <RightSide>
                        {
                            isclicked.includes('note') && 
                            <ForNotes>
                                <Input placeholder="Title" value={titleNote} onChange={(e) => setTitleNote (e.target.value)}/>
                                <Textarea placeholder="Details" value={detailsNote} onChange={(e) => setDetailsNote (e.target.value)}/>
                                <Tag onClick={handleNotes}>CREATE NOTE</Tag>
                            </ForNotes>
                        }
                        {
                            isclicked.includes('project') &&
                            <ForProjects>
                                <Input placeholder="Title" value={titleNote} onChange={(e) => setTitleNote (e.target.value)}/>
                                <Textarea placeholder="Details" value={detailsNote} onChange={(e) => setDetailsNote (e.target.value)}/>
                                <Tag onClick={handleNotes}>CREATE PROJECT</Tag>
                            </ForProjects>
                        }
                        
                    </RightSide>
                </Container>
            </Inner>
        </>
    )
}

export default Modal