import React from "react";

import Router from "./routes";
import { GlobalStyle } from "./styles";
import { BooksProvider } from "./context/books";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BooksProvider>
        <Router />
      </BooksProvider>
    </>
  );
};

export default App;
