import React from "react";

import Router from "./routes";
import { GlobalStyle } from "./styles";
import { BooksProvider } from "./context/books";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BooksProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BooksProvider>
    </>
  );
};

export default App;
