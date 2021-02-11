import React from 'react';
import Table, {Data, Heading, Row} from '../../atoms/Table'
export const BookList = () => {
    return (
        <Table>
            <Row>
                <Heading>Livro</Heading>
                <Heading>Autor</Heading>
                <Heading>Editora</Heading>
                <Heading>Ano</Heading>
                <Heading>Ações</Heading>
            </Row>
            <Row>
                <Data><div><p>Prazeres Maditos</p><p>(98545566543)</p></div></Data>
                <Data>Rocco</Data>
                <Data>Laravel</Data>
                <Data>2019</Data>
                <Data><a href="http://google.com">Laravel</a></Data>
            </Row>
        </Table>
    )
}

