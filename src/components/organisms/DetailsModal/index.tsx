import React, { ReactNode } from "react";

import { BookDetails } from "../../molecules/BookDetails";
import { PageContainer } from "./styles";

interface Props {
  children?: ReactNode;
}

export const DetailsModal = ({ children }: Props) => {
  const handleClick = () => {
    console.log("container");
  };

  return (
    <PageContainer onClick={handleClick}>
      <BookDetails></BookDetails>
    </PageContainer>
  );
};
