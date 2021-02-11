import react, { useState } from "react";
import { NavButton } from "../../atoms/NavButton";
import { PaginationContainer } from "./styles";

export const Pagination = () => {
  const [arrLength, setArrLength] = useState(10);

  const count = 1000;
  const itemPerPage = 10;

  const pageNumber = Math.ceil(count / itemPerPage);
  const currentPage = Math.ceil(arrLength / itemPerPage);

  const countButtons = (): number[] => {
    let items = [];

    for (let i = 0; i <= currentPage + 3; i++) {
      if (
        i > 0 &&
        i <= pageNumber &&
        (i > currentPage - 3 || i > currentPage + 2)
      ) {
        items.push(i);
      }
    }

    return items;
  };

  return (
    <PaginationContainer>
      <NavButton onClick={() => setArrLength(1 * itemPerPage)}>
        {"<<"}
      </NavButton>
      <NavButton
        onClick={() => {
          if (currentPage > 1) setArrLength((currentPage - 1) * itemPerPage);
        }}
      >
        {"<"}
      </NavButton>
      {countButtons().map((item, idx) => (
        <NavButton
          onClick={() => setArrLength(item * itemPerPage)}
          style={{
            backgroundColor: item === currentPage ? "grey" : "transparent",
          }}
        >
          {item}
        </NavButton>
      ))}
      <NavButton disabled style={{ color: "black" }}>
        ...
      </NavButton>
      <NavButton onClick={() => setArrLength(pageNumber * itemPerPage)}>
        {pageNumber}
      </NavButton>
      <NavButton
        onClick={() => {
          if (currentPage < pageNumber)
            setArrLength((currentPage + 1) * itemPerPage);
        }}
      >
        {">"}
      </NavButton>
      <NavButton
        onClick={() => {
          setArrLength(pageNumber * itemPerPage);
        }}
      >
        {">>"}
      </NavButton>
    </PaginationContainer>
  );
};