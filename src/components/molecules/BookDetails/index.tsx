import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Card } from "../../atoms/Card";
import { BooksApiService } from "../../../service";
import { BookDetails as BookDetailsInterface } from "../../../service/booksApi/booksApi.interfaces";
import Loader from "react-loader-spinner";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close-circle.svg";
import {
  ContentWrapper,
  TitleWrapper,
  TitleText,
  SubTitleText,
  ContentText,
  CloseButton,
} from "./styles";
import { showError } from "../../../helper/showError";

export const BookDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState<BookDetailsInterface>();
  const [error, setError] = useState(false);
  const history = useHistory();

  const closeModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);

      try {
        if (id) {
          const response = await BooksApiService.getInstance().fetchBookDetails(
            {
              id,
            }
          );
          setBookDetails(response.data);
        }
      } catch (err) {
        showError(
          "Não foi possível carregar as informações do livro selecionado!"
        );
        history.goBack();
      } finally {
          setLoading(false);
      }

    };

    fetchBookDetails();
  }, [id, history]);

  if (loading) {
    return (
      <Card centerAligned>
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
        <CloseButton onClick={closeModal}>
          <CloseIcon fill="white" />
        </CloseButton>
      </TitleWrapper>
      <ContentWrapper>
        <ContentText>Idioma: {bookDetails?.idioma}</ContentText>
        <ContentText>Peso: {bookDetails?.peso} g</ContentText>
        <ContentText>Largura: {bookDetails?.largura} cm</ContentText>
        <ContentText>Altura: {bookDetails?.altura} cm</ContentText>
        <ContentText>Comprimento: {bookDetails?.comprimento} cm</ContentText>
      </ContentWrapper>
    </Card>
  );
};
