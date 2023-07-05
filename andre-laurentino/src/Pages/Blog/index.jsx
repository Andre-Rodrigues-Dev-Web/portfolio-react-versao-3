import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import NewsCard from '../../Components/Card';
import axios from 'axios';

const Blog = () => {
  const maxDescriptionLength = 180;
  const [noticias, setNoticias] = useState([]);

  const truncateDescription = (description) => {
    if (description.length > maxDescriptionLength) {
      return description.substring(0, maxDescriptionLength) + '...';
    }
    return description;
  };

  useEffect(() => {
    axios.get('http://localhost/www/api-meu-blog/api/listanoticias')
      .then(response => setNoticias(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section>
      <Container>
        <Row>
          {noticias.map((noticia, index) => ( // <-- Added 'index' here
            <Col lg={6} md={6} sm={12} xs key={index}>
              <NewsCard
                titulo={noticia.titulo}
                descricao={truncateDescription(noticia.descricao)}
                imagem={noticia.imagem}
                data={noticia.data}
                slug={noticia.slug} 
                categoria={noticia.categoria}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
