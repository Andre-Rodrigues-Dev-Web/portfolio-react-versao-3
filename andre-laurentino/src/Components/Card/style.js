import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Montserrat', sans-serif;
  margin: 16px;
  width: 300px;
`;

const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const DataCard = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
`;

const ImageCard = styled.img`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const ReadMoreLink = styled(Link)`
  background-color: #3498db;
  border-radius: 8px;
  color: #fff;
  display: block;
  padding: 8px 1rem;
  text-align: center;
  text-decoration: none;
  transition: 1s ease-in-out background-color;
  &:hover{
    background-color: #2980b9;
  }
`;

const Title = styled.h2`
  font-size: 18px;
`;

export{
    CardContainer,
    ContentCard,
    DataCard,
    Description,
    ImageCard,
    ReadMoreLink,
    Title
}
