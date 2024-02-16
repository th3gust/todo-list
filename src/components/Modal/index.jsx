import { Container, ControlSpan, Explain, ForNotes, ForProjects, ForToDo, Inner, InnerNav, Input, InputDate, ModalList, ModalListItem, Outer, RightSide, Tag, Textarea} from "./styles";
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

    const [clickedTag, setClickedTag] = useState('');

    const handleClickedTag = (value) => {
        if (clickedTag === value) {
            setClickedTag('');
        } else {
            setClickedTag(value);
        }
    };

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

    console.log(clickedTag)

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
                        {
                            isclicked.includes('todo') &&
                            <ForToDo>
                                <Input placeholder="Title: Pay bills"/>
                                <Textarea placeholder="Details: e.g internet, phone, rent"/>
                                <div>
                                    <ControlSpan>
                                        <Explain>Due Date:</Explain>
                                        <InputDate type = "date"/>
                                    </ControlSpan>
                                    <ControlSpan>
                                        <Explain>Priority:</Explain>
                                        <Tag onClick={() => handleClickedTag('low')} className={clickedTag === 'low' ? 'green_selected' : 'green'}>LOW</Tag>
                                        <Tag onClick={() => handleClickedTag('medium')} className={clickedTag === 'medium' ? 'yellow_selected' : 'yellow'}>MEDIUM</Tag>
                                        <Tag onClick={() => handleClickedTag('high')} className={clickedTag === 'high' ? 'red_selected' : 'red'}>HIGH</Tag>
                                    </ControlSpan>
                                </div>
                                <article><Tag>ADD TO DO</Tag></article>
                             </ForToDo>
                        }
                        
                    </RightSide>
                </Container>
            </Inner>
        </>
    )
}

export default Modal