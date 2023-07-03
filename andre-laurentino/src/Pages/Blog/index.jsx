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

  // Função para buscar os dados da API
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost/www/api-meu-blog/api/listanoticias'); // Substitua 'URL_DA_API_PHP' pela URL da sua API PHP
      const data = await response.json();
      setPosts(data); // Atualiza o estado 'posts' com os dados recebidos da API
    } catch (error) {
      console.error('Erro ao obter os dados da API:', error);
    }
  };

  // Chamada para buscar os dados da API quando o componente for montado
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
                title={post.titulo}
                description={truncateDescription(post.descricao)}
                image={post.imagem}
                date={post.data}
                slug={post.slug} 
                category={post.categoria}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
