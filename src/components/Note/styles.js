import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({theme}) => theme.colors.white};
    min-width: 10rem !important;
    max-width: 28rem !important;
    min-height: 10rem !important;
    padding: 2rem;
    position:relative;
    
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
        transform: scale(1.003);
        transform-origin: 50% 50%;
        box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
        transition: all .2s ease-out;
    }
`