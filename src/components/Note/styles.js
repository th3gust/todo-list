import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({theme}) => theme.colors.white};
    min-width: 10rem !important;
    max-width: 28rem !important;
    min-height: 10rem !important;
    padding: 2rem;
    position:relative;
    transition: all .3s ease-in;
    
    input{
        outline: none;
        background-color: transparent;
        border: none;

        &::placeholder{
            color: black;
        }
    }
    

    .title{
        margin-bottom: 2rem;
        font-weight: 300;
        outline: none;
    }

    .details{
        font-weight: 300;
        outline: none;
    }

    &:hover{
        box-shadow: 1px 1px 5px black;
    }
`