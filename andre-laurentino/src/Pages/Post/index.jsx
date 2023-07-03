import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Post = (props) => {

    const [data, setData] = useState([]);

    const [slug] = useState(props.match.params.slug);

    useEffect(() => {
        const getProduto = async () => {
            await fetch("http://localhost/www/api-meu-blog/api/listanoticias?slug=" + slug)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    setData(responseJson.produto);
                });
        }
        getProduto();
    }, [slug]);
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>{data.titulo}</h2>
                        <p>{data.descricao}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Post;