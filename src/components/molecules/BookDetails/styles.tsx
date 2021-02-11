import styled from "styled-components";

export const TitleWrapper = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 24px;
`;

export const TitleText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

export const SubTitleText = styled(TitleText)`
  color: white;
  font-weight: normal;
  font-size: 14px;
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

export const FooterWrapper = styled.div``;
