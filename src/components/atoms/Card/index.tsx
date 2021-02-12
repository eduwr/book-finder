import styled from 'styled-components';

interface CardProps {
    centerAligned?: boolean;
}

export const Card = styled.div<CardProps>`
    width: 50vw;
    height: 50vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({centerAligned}) => centerAligned && `
        justify-content: center;
        align-items: center;
    `}


    @media (max-width: 600px) {
        width: 100%;
        margin: 0 8px;
    }
`;