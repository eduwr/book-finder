import React from "react";

import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { SearchBarContainer, SearchButton, InputWrapper } from "./styles";
import { Input } from "../../atoms/Input";

export const SearchBar = () => (
  <SearchBarContainer>
    <InputWrapper>
      <SearchIcon />
      <Input placeholder="Busque livros pelo título, autor ou ISBN" />
    </InputWrapper>
    <SearchButton>Buscar</SearchButton>
  </SearchBarContainer>
);
