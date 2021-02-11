import React, { useEffect, useState } from "react";
import { YearInput } from "../../atoms/Input";
import { Body } from "../../atoms/Typography";
import { YearFilterContainer, InputWrapper, FilterWrapper } from "./styles";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import {useBooksDispatch} from '../../../hooks'
import { BooksActionTypes } from "../../../context/books";
export const YearFilter = () => {
  const [startYear, setStartYear] = useState("");
  const [finalYear, setFinalYear] = useState("");
  const dispatch = useBooksDispatch()
  
  useEffect(() => {
      dispatch({
        type: BooksActionTypes.SET_SEARCH_PARAMS,
        payload: {
          finalYear,
          startYear
        }
      })
  }, [startYear, finalYear, dispatch])


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (!e.target.value) {
      return setState("");
    }

    const sanitizedString = e.target.value.replace(/[^0-9]/g, "");

    if (sanitizedString.length > 4) {
      return;
    }

    if (
      parseInt(sanitizedString, 10) >= 0 &&
      parseInt(sanitizedString, 10) <= new Date().getFullYear()
    ) {
      setState(sanitizedString);
    }
  };

  return (
    <YearFilterContainer>
      <Body>Filtrar ano de publicação:</Body>
      <FilterWrapper>
        <InputWrapper>
          <YearInput
            placeholder="1999"
            value={startYear}
            onChange={(e) => handleInputChange(e, setStartYear)}
          ></YearInput>
          <CalendarIcon />
        </InputWrapper>
        <Body>até</Body>
        <InputWrapper>
          <YearInput
            placeholder="1999"
            value={finalYear}
            onChange={(e) => handleInputChange(e, setFinalYear)}
          ></YearInput>
          <CalendarIcon />
        </InputWrapper>
      </FilterWrapper>
    </YearFilterContainer>
  );
};
