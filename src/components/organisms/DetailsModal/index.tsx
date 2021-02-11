import React, { ReactNode } from "react";

import { BookDetails } from "../../molecules/BookDetails";
import { PageContainer } from "./styles";

interface Props {
  children?: ReactNode;
}

export const DetailsModal = ({ children }: Props) => {

  return (
    <PageContainer>
      <BookDetails></BookDetails>
    </PageContainer>
  );
};
