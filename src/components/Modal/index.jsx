import { Container, ControlSpan, Explain, ForNotes, ForProjects, ForToDo, Inner, InnerNav, Input, InputDate, ModalList, ModalListItem, Outer, RightSide, Tag, Textarea} from "./styles";
import Header from "../Header";
import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/Notes";
import { ToDoContext } from "../../contexts/ToDo";


const Modal = ({open=false, closeModal}) =>{

    //controle click do nav
    
    const [isclicked, setisclicked] = useState(['todo'])

    const handleClicked = (value) =>{
        if (isclicked.includes(value)){
            setisclicked(isclicked.filter((item => item !== value)))
        } else{
            setisclicked([value])
        }
    }

    //controle de click da tag

    const [clickedTag, setClickedTag] = useState('');

    const handleClickedTag = (value) => {
        if (clickedTag === value) {
            setClickedTag('');
        } else {
            setClickedTag(value);
        }
    };

    //controle das notes

    const {notesArr, addNote} = useContext(NotesContext)
    const [titleNote, setTitleNote] = useState('')
    const [detailsNote, setDetailsNote] = useState('')

    const clearNoteInput = () =>{
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

        clearNoteInput();

        closeModal()
    }
    
    //controle dos taks

    const {tasks, addTask} = useContext(ToDoContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDetails, setTaskDetails] = useState('')
    const [taskDate, setTaskDate] = useState('')

    const clearTaskInput = () =>{
        setTaskTitle('')
        setTaskDetails('')
        setTaskDate('')
    }
    
    const handleTask = () =>{

        const newTask = {
            taskId: tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 0, 
            title: taskTitle,
            details: taskDetails,
            date: taskDate, 
            priority: clickedTag,
        }

        addTask(newTask)

        clearTaskInput()

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
                        {
                            isclicked.includes('todo') &&
                            <ForToDo>
                                <Input placeholder="Title: Pay bills" value = {taskTitle} onChange={e => setTaskTitle(e.target.value)}/>
                                <Textarea placeholder="Details: e.g internet, phone, rent" value = {taskDetails} onChange={e => setTaskDetails(e.target.value)}/>
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
                                <article><Tag onClick={handleTask}>ADD TO DO</Tag></article>
                             </ForToDo>
                        }
                        
                    </RightSide>
                </Container>
            </Inner>
        </>
    )
}

export default Modal