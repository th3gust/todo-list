import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const Main = styled.main`
    display: grid;
    grid-template-columns: 34rem auto;
    height: 110vh;
`

export const LeftSide = styled.section`
    background-color: ${({theme}) => theme.colors.white_default};
    grid-column: 2;
    padding: 5rem;
    width: 100%;
    height: 100%;
`