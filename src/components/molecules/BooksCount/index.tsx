import React from "react";
import { Body } from "../../atoms/Typography";
import { useBooksState } from "../../../hooks";
export const BooksCount = () => {
  const { data } = useBooksState();

  if (!data || !data.totalCount) {
    return <Body>Nenhum livro encontrado</Body>;
  }

  if (data.totalCount === 1) {
    return <Body>1 resultado encontrado</Body>;
  }

  return <Body>{`${data.totalCount} resultados encontrados`}</Body>;
};
