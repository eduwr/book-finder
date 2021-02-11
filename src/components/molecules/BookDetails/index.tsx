import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Card } from "../../atoms/Card";
import { BooksApiService } from "../../../service";
import { BookDetails as BookDetailsInterface } from "../../../service/booksApi/booksApi.interfaces";
import Loader from "react-loader-spinner";
import {
  ContentWrapper,
  TitleWrapper,
  TitleText,
  SubTitleText,
  ContentText,
} from "./styles";
export const BookDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState<BookDetailsInterface>();

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      if (id) {
        const response = await BooksApiService.getInstance().fetchBookDetails({
          id,
        });
        setBookDetails(response.data);
      }

      setLoading(false);
    };

    fetchBookDetails();
  }, [id]);

  if (loading && !bookDetails) {
    return (
      <Card>
        <Loader type="Grid" color="grey" height={100} width={100} />
      </Card>
    );
  }

  return (
    <Card>
      <TitleWrapper>
        <TitleText>{bookDetails?.titulo}</TitleText>
        <SubTitleText>ISBN: {bookDetails?.isbn}</SubTitleText>
        <SubTitleText>Author: {bookDetails?.autor}</SubTitleText>
        <SubTitleText>Editora: {bookDetails?.editora}</SubTitleText>
      </TitleWrapper>
      <ContentWrapper>
        <ContentText>Idioma: {bookDetails?.idioma}</ContentText>
        <ContentText>Peso: {bookDetails?.peso} g</ContentText>
        <ContentText>Largura: {bookDetails?.largura} cm</ContentText>
        <ContentText>Altura: {bookDetails?.altura} cm</ContentText>
      </ContentWrapper>
    </Card>
  );
};
