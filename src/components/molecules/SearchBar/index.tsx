import React from "react";

import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import {
  Input,
  SearchBarContainer,
  SearchButton,
  InputWrapper,
} from "./styles";

export const SearchBar = () => (
  <SearchBarContainer>
    <InputWrapper>
      <SearchIcon />
      <Input placeholder="Busque livros pelo título, autor ou ISBN" />
    </InputWrapper>
    <SearchButton >Buscar</SearchButton>
  </SearchBarContainer>
);
