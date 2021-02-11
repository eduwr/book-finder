import React from "react";
import {YearSectionContainer} from './styles'
import { BooksCount } from "../../molecules/BooksCount";
import { YearFilter } from "../../molecules/YearFilter";

export const YearSection = () => (
  <YearSectionContainer>
    <YearFilter />
    <BooksCount />
  </YearSectionContainer>
);
