import styled from "styled-components";

export const DetailsModalInner = styled.dialog`
    width: 60rem;
    height: 28rem;
    position: absolute;
    top: 30%;
    left: 32%;
    outline: none;
    border: none;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 1rem;
    padding: 4rem;
    color: ${({theme}) => theme.colors.purple};

    h1{
        font-weight: 400;
        font-size: 4rem;
        margin-bottom: 2.6rem;
    }

    p{
        margin-bottom: 1rem;
        text-align: start;
    }


`

export const DetailsModalOuter = styled.dialog`
    position: absolute;
    width: 100vw;
    min-height: 120vh;
    top: 0;
    left: 0;
    outline: none;
    border: none;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.3);
`