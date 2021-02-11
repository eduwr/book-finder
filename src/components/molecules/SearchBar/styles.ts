import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    height: 3rem;
`;

export const SearchButton = styled.button`
    height: 3rem;
    border: 1px solid black;
    margin-left: 8px;
    padding: 0 32px;
    background-color: lightgrey;
    font-size: 1rem;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    padding: 0 8px;
    border: 1px solid black;
    margin-left: 16px;
`;