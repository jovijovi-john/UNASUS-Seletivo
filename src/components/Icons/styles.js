import styled from "styled-components";

export const BoxIcon = styled.div`
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.circle ? 
    'clip-path: circle()' : 'border-radius: 10px;'};
    background-color: var(${props => props.color});

`