import { Container } from "./styles";

const Button = ({variant = false, ...rest}) =>{
    return(
        <Container $variant={variant} {...rest}>
            X
        </Container>
    )
}

export default Button