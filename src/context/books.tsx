import {
  FetchBooksResponse,
  FetchBooksProps,
} from "../service/booksApi/booksApi.interfaces";
import React, { createContext } from "react";

// Declare actions types
export enum BooksActionTypes {
  SET_BOOKS = "SET_BOOKS",
  SET_SEARCH_PARAMS = "SET_SEARCH_PARAMS",
}

// Declare actions
type BooksActions =
  | {
      type: BooksActionTypes.SET_BOOKS;
      payload: FetchBooksResponse;
    }
  | {
      type: BooksActionTypes.SET_SEARCH_PARAMS;
      payload: Partial<FetchBooksProps>;
    };

export type Dispatch = (action: BooksActions) => void;
export type State = {
  data?: FetchBooksResponse;
  searchParams: Partial<FetchBooksProps>;
};
type ProviderProps = { children: React.ReactNode };

// Create books contexts
export const BooksStateContext = createContext<State | undefined>(undefined);
export const BooksDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

// the reducer changes the state according to the action type
const booksReducer = (state: State, action: BooksActions): State => {
  switch (action.type) {
    case BooksActionTypes.SET_BOOKS:
      return {
        ...state,
        data: action.payload,
      };
    case BooksActionTypes.SET_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: action.payload,
      };
    default:
      throw new Error("Unhandled action type");
  }
};

const initialState: State = {
  searchParams: {},
};

export const BooksProvider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(booksReducer, initialState);

  return (
    <BooksStateContext.Provider value={state}>
      <BooksDispatchContext.Provider value={dispatch}>
        {children}
      </BooksDispatchContext.Provider>
    </BooksStateContext.Provider>
  );
};
