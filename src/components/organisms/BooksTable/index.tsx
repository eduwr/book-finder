import React from "react";
import { BookList } from "../../molecules/BookList";
import { Pagination } from "../../molecules/Pagination";

import { BooksTableContainer } from "./styles";

export const BooksTable = () => (
  <BooksTableContainer>
     <BookList/>
     <Pagination />
  </BooksTableContainer>
);
