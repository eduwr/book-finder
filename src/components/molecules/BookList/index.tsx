import React, { useEffect, useState } from "react";
import Table, { TableBody } from "../../atoms/Table";
import { useBooksDispatch, useBooksState } from "../../../hooks";
import { Book } from "../Book";
import { TableHeader } from "../TableHeader";
import { BooksApiService } from "../../../service";
import { BooksActionTypes } from "../../../context/books";
import Loader from 'react-loader-spinner';

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
          <TableBody>
            {data.items.map((item, idx) => (
              <Book
                key={item.id}
                book={item}
                background={idx % 2 === 0 ? "lightgrey" : "white"}
              />
            ))}
          </TableBody>
        </Table>
      ) : (
        <Loader
          type="Grid"
          color="grey"
          height={100}
          width={100}
        />
      )}
    </>
  );
};
