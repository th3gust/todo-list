/* eslint-disable react/prop-types */
import {useContext } from "react";
import Button from "../Button";
import { Container } from "./styles";
import { NotesContext } from "../../contexts/Notes";


const Note = ({title, details, id}) =>{

    const {removeNote, editNoteTitle, editNoteDetails} = useContext(NotesContext)

    const handleRemoveNote = () =>{
        removeNote(id)
    }

    const handleTitle = (e) =>{
        editNoteTitle(e.target.value, id)
    }

    const handleDetails = (e) =>{
        editNoteDetails(e.target.value, id)
    }
    
    return(
        <Container id={id}>
            <input className="title" placeholder={title} onChange={e=> handleTitle(e)}/>
            <input className="details" placeholder={details} onChange={e=> handleDetails(e)}/>
            <Button onClick={handleRemoveNote}/>
        </Container>
    )
}

export default Note