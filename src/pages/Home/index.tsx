import React from "react";
import { Header, Divider } from "../../components";
import { BooksTable } from "../../components/organisms/BooksTable";
import { YearSection } from "../../components/organisms/YearSection";
import { HomeContainer } from "./styles";
export const Home = () => (
  <HomeContainer>
    <Header />
    <Divider />
    <YearSection />
    <Divider />
    <BooksTable />
  </HomeContainer>
);
