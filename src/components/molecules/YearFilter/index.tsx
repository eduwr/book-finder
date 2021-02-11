import React from "react";
import { YearInput } from "../../atoms/Input";
import { Body } from "../../atoms/Typography";
import { YearFilterContainer, InputWrapper, FilterWrapper } from "./styles";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";

export const YearFilter = () => {
  return (
    <YearFilterContainer>
      <Body>Filtrar ano de publicação:</Body>
      <FilterWrapper>
        <InputWrapper>
          <YearInput placeholder="1999"></YearInput>
          <CalendarIcon />
        </InputWrapper>
        <Body>até</Body>
        <InputWrapper>
          <YearInput placeholder="1999"></YearInput>
          <CalendarIcon />
        </InputWrapper>
      </FilterWrapper>
    </YearFilterContainer>
  );
};
