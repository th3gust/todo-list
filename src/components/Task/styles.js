import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 88rem;
    height: 5rem;
    background-color: ${({theme}) => theme.colors.white};
    position: relative;
    margin-bottom: 1rem;

    &:hover{
        transform: scale(1.003);
        transform-origin: 50% 50%;
        box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
        transition: all .2s ease-out;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 42rem;

    &::before{
        content: '';
        background-color: ${({theme, $priority: priority}) => {
            switch(priority){
                case 'low':
                    return theme.colors.green
                case 'medium':
                    return theme.colors.yellow
                case 'high':
                    return theme.colors.red
                default:
                    break;
            }
        }};
        position: absolute;
        width: .3rem;
        height: 100%;
        top: 0;
        left: 0;
    }
    
`

export const RightSide = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.8rem;
    margin-left: 1.5rem;
    width: 12rem;
`

export const P = styled.p`
    font-size: 2rem;
    font-weight: 300;
    ${({check}) => check && css`
    text-decoration: line-through;
    color: ${({theme}) => theme.colors.grey_default};
    `}
`

export const LeftSide = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
    width: 30rem;
`

export const Checked = styled.div`
    min-width: 1.75rem;
    height: 1.75rem;
    border: 2px solid ${({theme}) => theme.colors.green};
    border-radius: .3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    ${({check}) => check && css`
        background-color: ${({theme}) => theme.colors.green};
        color: ${({theme}) => theme.colors.white};
    `}
`
export const Tag = styled.button`
    width: 10rem;
    border: 1px solid ${({theme}) => theme.colors.green};
    color: ${({theme}) => theme.colors.green};
    background-color: transparent;
    padding: .5rem;
    cursor: pointer;
    border-radius:.5rem;
    transition: all .3s ease-in-out;

    &:hover{
        background-color:${({theme}) => theme.colors.green};
        color: ${({theme}) => theme.colors.white};
    }

    ${({check}) => check && css`
        opacity: 0.4;
    `}
`

export const ShowDate = styled.article`
    width: 8rem;

    ${({check}) => check && css`
        opacity: 0.4;
    `}

`

export const Icon = styled.div`
    cursor: pointer;

    &:hover{
        color: ${({theme}) => theme.colors.green};
        transition: all .3s ease-in-out;
    }

    ${({check}) => check && css`
        opacity: 0.4;
    `}
`

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