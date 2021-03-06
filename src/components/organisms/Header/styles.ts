import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px;

    @media(max-width: 600px) {
        flex-direction: column;
    }
`;
