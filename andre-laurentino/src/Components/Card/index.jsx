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
      <ImageCard src="https://i.pinimg.com/originals/eb/18/d0/eb18d0e85491c5639803417ccebc2ec0.png"/>
      <ContentCard>
        <Title>{titulo}</Title>
        <DataCard>Data de publicação: {data}</DataCard>
        <DataCard>Categoria: {categoria}</DataCard>
        <Description>{descricao}</Description>
        <ReadMoreLink to={slug}>Confira o artigo</ReadMoreLink>
      </ContentCard>
    </CardContainer>
  );
};

export default NewsCard;
