import React from "react";
import { Row, Heading } from "../../atoms/Table";

export const TableHeader = () => {
  return (
    <Row>
      <Heading>Livro</Heading>
      <Heading>Autor</Heading>
      <Heading>Editora</Heading>
      <Heading>Ano</Heading>
      <Heading>Ações</Heading>
    </Row>
  );
};
