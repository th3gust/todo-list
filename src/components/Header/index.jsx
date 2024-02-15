import { Container, Variant } from "./styles";
import logo from "../../assets/imgs/logo.png";
import Button from "../Button";

const Header = ({inner=false, onClick}) =>{
    return(
        <Container> 
            {
                inner?
                (   <Variant>
                        <h1>Create a new... </h1>
                        <Button variant onClick={onClick}/>
                    </Variant>

                ):
                (
                    <img
                        src= {logo}
                    />
                )
            }
            
        </Container>
    )
}

export default Header