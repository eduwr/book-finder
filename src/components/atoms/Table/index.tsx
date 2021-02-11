import styled from "styled-components";

interface CellProps {
  alignment?: "center" | "start" | "right";
  background?: "grey" | "lightgrey" | 'white';
}

export const Row = styled.tr``;

export const Data = styled.td<CellProps>`
  padding: 0 4px;
  border: 1px solid black;
  text-align: ${({ alignment }) => alignment || "start"};
  background-color: ${({ background }) => background || "grey"};
`;

export const Heading = styled.th<CellProps>`
  padding: 16px 4px;
  text-align: ${({ alignment }) => alignment || "start"};
  background-color: ${({ background }) => background || "grey"};
  border: 1px solid black;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
`;

export default Table;
