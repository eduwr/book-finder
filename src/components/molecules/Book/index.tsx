import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Book as BookType } from "../../../service/booksApi/booksApi.interfaces";
import { Row, Data } from "../../atoms/Table";
import { BookText } from "./styles";
interface Props {
  background?: "white" | "grey" | "lightgrey";
  book: BookType;
}

export const Book = ({ background, book }: Props) => {
  const location = useLocation()

  return (
    <Row background={background || "lightgrey"}>
      <Data>
        <div>
          <BookText>{book.titulo}</BookText>
          <BookText>{`(${book.isbn})`}</BookText>
        </div>
      </Data>
      <Data>{book.autor}</Data>
      <Data>{book.editora}</Data>
      <Data alignment="right">{book.ano}</Data>
      <Data alignment="center">
        <Link
          to={{
            pathname: `book/${book.id}`,
            state: {
              background: location,
            },
          }}
        >
          Details
        </Link>
      </Data>
    </Row>
  );
};
