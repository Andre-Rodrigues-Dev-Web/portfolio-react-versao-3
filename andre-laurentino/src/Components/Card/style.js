import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 16px;
`;

const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const DataCard = styled.span`
  display: inline-block;
  font-size: 12px;
  margin-bottom: 16px;
`;

const ImageCard = styled.img`
    border-top-left-radius: 8px;
`;

const ReadMoreLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: #007bff;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
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
