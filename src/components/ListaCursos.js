
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

function ListaCursos() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch('https://drivetech-api.onrender.com/api/cursos');
        const data = await response.json();
        setCursos(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="success" />
        <p className="mt-2">Carregando cursos...</p>
      </Container>
    );
  }

  return (
    <Container as="section" id="cursos" className="py-5" style={{ backgroundColor: '#f8f9fa' }}> 
      <h2 className="text-center mb-5">Nossos Cursos</h2>
      <Row>
        {cursos.map(curso => (
          <Col md={6} lg={4} key={curso.id} className="mb-4 d-flex align-items-stretch">
            <Card className="shadow-sm w-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h4" className="text-success">{curso.nome}</Card.Title>
                <Card.Text className="text-muted">Duração: {curso.duracao}</Card.Text>
                <Card.Text as="h5" className="mt-auto">Preço: {curso.preco}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListaCursos;