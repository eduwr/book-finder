import React, { useEffect, useMemo } from "react";
import Table, { TableBody } from "../../atoms/Table";
import { useBooksDispatch, useBooksState } from "../../../hooks";
import { Book } from "../Book";
import { TableHeader } from "../TableHeader";
import { BooksApiService } from "../../../service";
import { BooksActionTypes } from "../../../context/books";
import Loader from "react-loader-spinner";
import { Body } from "../../atoms/Typography";

export const BookList = () => {
  const dispatch = useBooksDispatch();
  const { data, searchParams, loading } = useBooksState();
  useEffect(() => {
    const fetchBooks = async () => {
      dispatch({
        type: BooksActionTypes.TOOGLE_LOADING,
      });
      const response = await BooksApiService.getInstance().fetchBooks(
        searchParams
      );

      dispatch({ type: BooksActionTypes.SET_BOOKS, payload: response.data });
      dispatch({
        type: BooksActionTypes.TOOGLE_LOADING,
      });
    };
    fetchBooks();
  }, [searchParams, dispatch]);

  const books = useMemo(() => {
    return data ? data.items.slice(-10) : [];
  }, [data]);

  if (!loading && books.length === 0) {
    return (
      <Body>Não foram encontrados livros com os filtros selecionados.</Body>
    );
  }

  return (
    <>
      {books && books.length > 0 ? (
        <Table>
          <TableHeader />
          <TableBody>
            {books.map((item, idx) => (
              <Book
                key={item.id}
                book={item}
                background={idx % 2 === 0 ? "lightgrey" : "white"}
              />
            ))}
          </TableBody>
        </Table>
      ) : (
        <Loader type="Grid" color="grey" height={100} width={100} />
      )}
    </>
  );
};
