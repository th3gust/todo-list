/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const NotesContext = createContext()

export const NotesProvider = ({children}) =>{
    const [notesArr, setNotesArr] = useState([{ noteId: 0, title: '', details: '' }]);

    const addNote = (newNote) =>{
        setNotesArr(prevNotesArr => [...prevNotesArr, newNote])
    }

    const removeNote = (id) =>{
        const stayNotes = notesArr.filter((item) => item.noteId !== id)
        setNotesArr(stayNotes)
    }

    const editNoteTitle = (newText, id) =>{
        const updatedNotesArr = notesArr.map((item) =>{
            if (item.noteId === id){
                return {...item, title: newText}
            }
            return item
        })

        setNotesArr(updatedNotesArr)
    }

    const editNoteDetails = (newText, id) =>{
        const updatedNotesArr = notesArr.map((item) =>{
            if (item.noteId === id){
                return {...item, details: newText}
            }
            return item
        })

        setNotesArr(updatedNotesArr)
    }

    return(
        <NotesContext.Provider value={{ notesArr, addNote, removeNote, editNoteTitle, editNoteDetails}}>
            {children}
        </NotesContext.Provider>
    )
}
