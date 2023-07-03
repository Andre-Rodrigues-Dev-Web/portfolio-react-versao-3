import styled from 'styled-components';

const ContentCard = styled.div`
    background-color: #ffff;
    border: 1px solid #333;
    border-radius: 8px;
`;

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ButtonCard = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export{
    ContainerCard,
    ContentCard,
    ButtonCard
}