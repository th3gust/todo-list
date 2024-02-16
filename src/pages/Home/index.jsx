import { Container, LeftSide, Main } from "./styles";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import {NotesProvider } from "../../contexts/Notes";
import Task from "../../components/Task";
import { ToDoProvider } from "../../contexts/ToDo";

const Home = () =>{
    return( 
        <Container >
            <ToDoProvider>
                <NotesProvider>
                <Header/>
                    <Main>
                        <Nav/>
                        <LeftSide>
                            {/* <NoteList/> */}
                            <Task/>
                        </LeftSide>
                    </Main>
                </NotesProvider>
            </ToDoProvider>
        </Container>
    )
}

export default Home