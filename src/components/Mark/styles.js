import styled from "styled-components";

export const Container = styled.div`
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.pink};
    font-size: 1.8rem;
    display: grid;
    place-content: center;
    padding: 1rem;
    color: ${({theme}) => theme.colors.white};
    font-weight: 500;
`

export const Button = styled.button`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.pink};
    font-size: 6rem;
    display: grid;
    place-content: center;
    padding: 1rem;
    color: ${({theme}) => theme.colors.white};
    font-weight: 500;
    border: none;
    box-shadow: .1rem .1rem 1rem black;

    margin-left: 15rem;
    cursor: pointer;
`
