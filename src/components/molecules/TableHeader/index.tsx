import React from "react";
import { Row, Heading, TableHead } from "../../atoms/Table";

export const TableHeader = () => {
  return (
    <TableHead>
      <Row>
        <Heading>Livro</Heading>
        <Heading>Autor</Heading>
        <Heading>Editora</Heading>
        <Heading alignment="right">Ano</Heading>
        <Heading alignment="center">Ações</Heading>
      </Row>
    </TableHead>
  );
};
