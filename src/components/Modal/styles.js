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

export const RightSide = styled.section``

export const ForNotes = styled.section`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const ForProjects = styled.section`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const ForToDo = styled.section`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;

    div{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    article{
        position: absolute;
        bottom: 2.5rem;
        right: 10rem;
    }
`

export const Input  = styled.input`
    font-size: 1.8rem;
    color: 1px solid ${({theme}) => theme.colors.white};
    outline: none;
    border: none;
`
export const InputDate  = styled.input`
    font-size: 1.8rem;
    color: ${({theme}) => theme.colors.green};
    outline: none;
    border: 2px solid ${({theme}) => theme.colors.green};
    border-radius: .5rem;
    padding: .5rem;
    text-transform: uppercase;
    font-size: 1.4rem;

`

export const ControlSpan = styled.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;

    button{
        margin: 0;
    }

    .green{
        color: ${({theme}) => theme.colors.green_default};
        border: 2px solid ${({theme}) => theme.colors.green_default};

        &:hover{
            color: ${({theme}) => theme.colors.white};
            background-color: ${({theme}) => theme.colors.green_default};
        }

    }

    .green_selected{
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.green_default};
        border: 2px solid ${({theme}) => theme.colors.green_default};
        pointer-events: none;
    }

    .yellow{
        color: ${({theme}) => theme.colors.yellow};
        border: 2px solid ${({theme}) => theme.colors.yellow};

        &:hover{
            color: ${({theme}) => theme.colors.white};
            background-color: ${({theme}) => theme.colors.yellow};
        }
    }

    
    .yellow_selected{
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.yellow};
        border: 2px solid ${({theme}) => theme.colors.yellow};
        pointer-events: none;

    }

    .red{
        color: ${({theme}) => theme.colors.red};
        border: 2px solid ${({theme}) => theme.colors.red};

        &:hover{
            color: ${({theme}) => theme.colors.white};
            background-color: ${({theme}) => theme.colors.red};
        }
    }

    .red_selected{
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.red};
        border: 2px solid ${({theme}) => theme.colors.red};
        pointer-events: none;
    }

`

export const Explain = styled.label`
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
    max-width: 15rem;
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