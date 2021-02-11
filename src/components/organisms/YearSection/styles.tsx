import styled from "styled-components";

export const YearSectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
