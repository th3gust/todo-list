import { Container } from "./styles";
import Note from "../Note";
import { NotesContext } from "../../contexts/Notes";
import { useContext } from "react";

const NoteList = () =>{

    const {notesArr} = useContext(NotesContext)

    return (
        <Container>
            {
                notesArr.map((item) => item.noteId === 0? null : <Note id= {item.noteId} key= {item.noteId} title={item.title} details={item.details}/>)
            }
        </Container>
    )
}

export default NoteList