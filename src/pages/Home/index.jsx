import { Container, LeftSide, Main } from "./styles";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import NoteList from "../../components/NotesList";
import {NotesProvider } from "../../contexts/Notes";

const Home = () =>{
    return( 
        <Container >
            <NotesProvider>
            <Header/>
                <Main>
                    <Nav/>
                    <LeftSide>
                        <NoteList/>
                    </LeftSide>
                </Main>
            </NotesProvider>
        </Container>
    )
}

export default Home