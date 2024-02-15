import styled, { css } from "styled-components";

export const Container = styled.section`
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 1rem;
    position: absolute;
    top: 1rem;
    right: 1rem;

    ${({$variant: variant}) => variant && css`
        font-size: 2.5rem;
        font-weight: bold;
    `}
`