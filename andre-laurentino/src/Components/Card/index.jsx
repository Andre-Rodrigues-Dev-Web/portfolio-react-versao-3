import React from 'react';
import {
  CardContainer,
  ContentCard,
  DataCard,
  Description,
  ImageCard,
  ReadMoreLink,
  Title
} from './style'
const NewsCard = ({ titulo, descricao, imagem, data, slug, categoria }) => {
  return (
    <CardContainer>
      <ImageCard src={imagem}/>
      <ContentCard>
        <Title>{titulo}</Title>
        <DataCard>Data de publicação: {data}</DataCard>
        <DataCard>Categoria: {categoria}</DataCard>
        <Description>{descricao}</Description>
        <ReadMoreLink to={"/post/" + slug}>Confira o artigo</ReadMoreLink>
      </ContentCard>
    </CardContainer>
  );
};

export default NewsCard;
