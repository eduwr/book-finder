import axios, { AxiosResponse } from "axios";
import {
  FetchBooksProps,
  FetchBooksResponse,
  BookDetails,
} from "./booksApi.interfaces";

export class BooksApiService {
  private static instance: BooksApiService;

  constructor() {
    if (BooksApiService.instance) {
      throw new Error(
        "Error: Instantiation failed: Use BooksApiService.getInstance() instead of new."
      );
    }
    BooksApiService.instance = this;
  }

  public static getInstance(): BooksApiService {
    if (!BooksApiService.instance) {
      BooksApiService.instance = new BooksApiService();
    }

    return BooksApiService.instance;
  }

  // Fix-me it should be setup with envs
  private api = axios.create({
    baseURL: "http://biblioteca.supero.com.br/api",
  });

  public fetchBooks = (
    props: Partial<FetchBooksProps> | undefined
  ): Promise<AxiosResponse<FetchBooksResponse>> => {
    if (!props || Object.keys(props!).length === 0) {
      return this.api.get(`/Livros`);
    }

    const {
      maxResultCount,
      search,
      finalYear,
      startYear,
    } = props;

    const finalYearQuery = finalYear ? `&AnoFinal=${finalYear}` : '';
    const startYearQuery = startYear ? `&AnoInicial=${startYear}` : '';
    const searchSentence = search ? `&Busca=${search}` : '';

    const maxResults = maxResultCount && maxResultCount > 10 ? maxResultCount : 10;
    return this.api.get(`/Livros?MaxResultCount=${maxResults}${finalYearQuery}${searchSentence}${startYearQuery}`);
  };

  public fetchBookDetails = async ({
    id,
  }: {
    id: string;
  }): Promise<AxiosResponse<BookDetails>> => {
    return await this.api.get(`Livros/${id}`);
  };
}

export default BooksApiService;
