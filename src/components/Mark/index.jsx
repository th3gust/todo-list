import { Button, Container } from "./styles";

const Mark = ({number, variant=false, onClick}) =>{
    return (
        <Container>
            {
                variant? 
                (
                    <Button onClick={onClick}>
                        {number}
                    </Button>
                ):
                (
                    <>
                        {number}
                    </>
                )
            }
        </Container>
    )
}

export default Mark