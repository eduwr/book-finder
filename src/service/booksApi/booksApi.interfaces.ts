export interface FetchBooksProps {
    search: string;
    startYear: string;
    finalYear: string;
    sorting: string;
    maxResultCount: number;
    skipCount: number;
}


export interface Book {
    id: string;
    titulo: string;
    isbn: string;
    autor: string;
    editora: string;
    ano: number;

}

export interface BookDetails extends Book {
    idioma: string;
    peso: number;
    comprimento: number;
    largura: number;
    altura: number;
}

export interface FetchBooksResponse {
    items: Book[];
    totalCount: number;
}