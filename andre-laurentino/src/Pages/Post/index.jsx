import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const { slug } = useParams();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const headers = {
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 
      'Access-Control-Allow-Headers': 'Content-Type, Authorization', 
    };

    axios.get(`http://localhost/www/api-meu-blog/api/listanoticias/${slug}`, { headers })
      .then(response => setNoticia(response.data))
      .catch(error => console.error(error));
  }, [slug]);

  if (!noticia) {
    return <div>Loading...</div>;
  }

  const { titulo, imagem, data, descricao } = noticia;

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Image src={imagem} alt={titulo} />
            <h2>{titulo}</h2>
            <p>Date: {data}</p>
            <p>{descricao}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Post;
