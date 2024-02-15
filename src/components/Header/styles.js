import styled from "styled-components";

export const Container = styled.header`
    color: ${({theme})=> theme.colors.white};
    background-color: ${({theme}) => theme.colors.pink};
    height: 7rem;
    display: flex;
    align-items: center;

    h1{
        height: 4.8rem;
        padding-inline: 2rem;
        font-size: 4rem;
        color: ${({theme})=> theme.colors.white_default}
    }

    img{
        margin-left: 3rem;
    }

    border-right: 1px solid ${({theme}) => theme.colors.grey};
`
 
export const Variant = styled.div` 
`   