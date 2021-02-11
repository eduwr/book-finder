import React, { useEffect, useState } from "react";
import Table from "../../atoms/Table";
import { useBooksDispatch, useBooksState } from "../../../hooks";
import { Book } from "../Book";
import { TableHeader } from "../TableHeader";
import { BooksApiService } from "../../../service";
import { BooksActionTypes } from "../../../context/books";

export const BookList = () => {
  const dispatch = useBooksDispatch();
  const { data } = useBooksState();
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await BooksApiService.getInstance().fetchBooks({});

      dispatch({ type: BooksActionTypes.SET_BOOKS, payload: response.data });
    };
    fetchBooks();
  }, []);

  return (
    <>
      {data ? (
        <Table>
          <TableHeader />
          {data.items.map((item, idx) => (
            <Book
              key={item.id}
              book={item}
              background={idx % 2 === 0 ? "lightgrey" : "white"}
            />
          ))}
        </Table>
      ) : (
        <p>Carregando</p>
      )}
    </>
  );
};
