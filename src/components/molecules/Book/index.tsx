import React from "react";
import { Book as BookType } from "../../../service/booksApi/booksApi.interfaces";
import { Row, Data } from "../../atoms/Table";

interface Props {
  background?: "white" | "grey" | "lightgrey";
  book: BookType;
}

export const Book = ({ background, book }: Props) => {
  return (
    <Row background={background || "lightgrey"}>
      <Data>
        <div>
          <p>{book.titulo}</p>
          <p>{`(${book.isbn})`}</p>
        </div>
      </Data>
      <Data>{book.autor}</Data>
      <Data>{book.editora}</Data>
      <Data>{book.ano}</Data>
      <Data>
        <a href="http://google.com">Laravel</a>
      </Data>
    </Row>
  );
};
