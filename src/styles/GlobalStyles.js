import { createGlobalStyle } from "styled-components";
import bg from "../assets/imgs/background.png"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{   
        font-size: 1.6rem;
        background: linear-gradient(to right bottom, ${({theme}) =>theme.colors.bg_body_1}, ${({theme}) =>theme.colors.bg_body_2}), url(${bg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 120vh;//RESOLVER ISSO!
    }

    *, body, input, button{
        font-family: "Roboto";
    }
`