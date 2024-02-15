import styled, { css } from "styled-components";

export const Outer = styled.dialog`
    position: fixed;
    min-height: 100%;
    min-width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.3);
`

export const Inner = styled.dialog`
    position: fixed;
    height: 48rem;
    width: 96rem;
    top: 10%;
    left: 20%;
    z-index: 3;
    border:none;
    box-shadow: 1px 1px 5px black;
`
export const Container = styled.section`
    display: grid;
    grid-template-columns: 18rem auto;
`

export const InnerNav = styled.nav`
    background-color: ${({theme}) => theme.colors.white};
    width: 100%;
    
    grid-column: 1;
`
export const ModalList = styled.ul`
    padding: 3rem 0 0 3rem;
    height: 41rem;
    border-right: 1px solid ${({theme}) => theme.colors.grey};
`

export const ModalListItem = styled.li`
    list-style: none;
    margin-bottom: 3.5rem;
    font-size: 2.2rem;
    font-weight: 200;
    display: flex;
    align-items: center;
    gap: 9rem;
    cursor: pointer;
    transition: .1s ease-in-out;
    &:hover{
        font-weight: 400;
        &::before{
            content: "//";
            margin-right: -8rem;
            
        }
    }

    ${({$isclicked: isclicked}) => isclicked && css`
        font-weight: 400;
        &::before{
            content: "//";
            margin-right: -8rem;
            
    `}
`

export const RightNotes = styled.section`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const Input  = styled.input`
    font-size: 1.8rem;
    color: 1px solid ${({theme}) => theme.colors.white};
    outline: none;
    border: none;
`

export const Textarea  = styled.textarea`
    font-size: 1.8rem;
    color: 1px solid ${({theme}) => theme.colors.white};
    height: 14rem;
    outline: none;
    resize: none;
    border: none;
`

export const Tag = styled.button`
    max-width: 10rem;
    border: 1px solid ${({theme}) => theme.colors.green};
    color: ${({theme}) => theme.colors.green};
    background-color: transparent;
    padding: .5rem;
    cursor: pointer;
    border-radius:.5rem;
    transition: all .3s ease-in-out;
    margin-top: 10rem;//ATENTAR PARA POSTERIDADE

    &:hover{
        color: ${({theme}) => theme.colors.white_default};
        background-color: ${({theme}) => theme.colors.green};
    }

`