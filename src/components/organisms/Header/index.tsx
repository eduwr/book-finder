import React from "react";
import { SearchBar } from "../../molecules/SearchBar";
import { HeaderContainer } from "./styles";
import { SuperoLogo } from "../../atoms/SuperoLogo";

export const Header = () => (
  <HeaderContainer>
    <SuperoLogo />
    <SearchBar />
  </HeaderContainer>
);
