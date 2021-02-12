import styled from "styled-components";

interface RowProps {
    background?: "grey" | "lightgrey" | 'white';
  }

interface CellProps {
  alignment?: "center" | "start" | "right";
}

export const Row = styled.tr<RowProps>`
  background-color: ${({ background }) => background || "grey"};
`;

export const Data = styled.td<CellProps>`
  padding: 0 4px;
  border: 1px solid black;
  text-align: ${({ alignment }) => alignment || "start"};
  overflow: hidden;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const Heading = styled.th<CellProps>`
  padding: 16px 4px;
  text-align: ${({ alignment }) => alignment || "start"};
  border: 1px solid black;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
`;

export default Table;
