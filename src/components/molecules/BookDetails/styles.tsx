import styled from "styled-components";

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 24px;
  align-items: flex-start;
  position: relative;
`;

export const TitleText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
`;

export const SubTitleText = styled(TitleText)`
  color: white;
  font-weight: normal;
  font-size: 14px;
  text-transform: none;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const ContentText = styled.p`
    margin: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
