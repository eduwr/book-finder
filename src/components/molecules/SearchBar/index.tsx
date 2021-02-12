import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { SearchBarContainer, SearchButton, InputWrapper } from "./styles";
import { Input } from "../../atoms/Input";
import { useBooksDispatch, useBooksState } from "../../../hooks";
import { BooksActionTypes } from "../../../context/books";
import { showError } from "../../../helper/showError";
export const SearchBar = () => {
  const dispatch = useBooksDispatch();
  const { searchParams } = useBooksState();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const { finalYear, startYear } = searchParams;
    if (startYear && finalYear && startYear >= finalYear) {
      showError("Atenção: A data final deve ser maior do que a data inicial");
      return;
    }

    dispatch({
      type: BooksActionTypes.SET_SEARCH_PARAMS,
      payload: {
        search,
        startYear,
        finalYear,
      },
    });
  };

  return (
    <SearchBarContainer>
      <InputWrapper>
        <SearchIcon />
        <Input
          placeholder="Busque livros pelo título, autor ou ISBN"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </InputWrapper>
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </SearchBarContainer>
  );
};
