import styled, { css } from "styled-components";

export const ListItem = styled.li`
    list-style: none;
    margin-bottom: 3.5rem;
    font-size: 2.6rem;
    font-weight: 200;
    display: flex;
    align-items: center;
    gap: 9rem;
    cursor: pointer;
    transition: .1s ease-in-out;
    &:hover{
        font-weight: 500;
        &::before{
            content: "//";
            margin-right: -8rem;
            
        }
    }

    ${({$variant: variant}) => variant && css`

        display: block;

        &:hover{
            &::before{
                content: "";
                margin-right: 0;
                margin-bottom: 0;

            }
        }
    `}

    ${({$isclicked: isclicked}) => isclicked && css`
        font-weight: 400;
        &::before{
            content: "//";
            margin-right: -8rem;
            
    `}
`