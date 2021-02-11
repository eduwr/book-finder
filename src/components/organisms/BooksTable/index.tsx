import React from "react";
import { BookList } from "../../molecules/BookList";

import { BooksTableContainer } from "./styles";

export const BooksTable = () => (
  <BooksTableContainer>
     <BookList/>
  </BooksTableContainer>
);
