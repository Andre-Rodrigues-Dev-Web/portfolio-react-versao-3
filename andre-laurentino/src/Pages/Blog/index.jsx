import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import NewsCard from '../../Components/Card';

const Blog = () => {
  const maxDescriptionLength = 180;
  const [posts, setPosts] = useState([]);

  const truncateDescription = (description) => {
    if (description.length > maxDescriptionLength) {
      return description.substring(0, maxDescriptionLength) + '...';
    }
    return description;
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost/www/api-meu-blog/api/listanoticias'); 
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Erro ao obter os dados da API:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section>
      <Container>
        <Row>
          {posts.map((post, index) => (
            <Col lg={6} md={6} sm={12} xs key={index}>
              <NewsCard
                titulo={post.titulo}
                descricao={truncateDescription(post.descricao)}
                imagem={post.imagem}
                data={post.data}
                slug={post.slug} 
                categoria={post.categoria}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
