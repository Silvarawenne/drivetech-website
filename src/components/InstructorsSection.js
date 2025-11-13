import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './InstructorsSection.css';

const InstructorsImages = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop' 
];

function InstructorsSection(){
    return(
        <Container as="section" id="instructors" className="py-5 bg-light">
      <h2 className="text-center mb-5">Nossos Instrutores Certificados</h2>
      
      <Row className="text-center">
        {/* Instrutor 1 */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Img 
                variant="top" 
                src={InstructorsImages} 
                className="instructor-img mb-3"
              />
              <Card.Title as="h4">Mariana Silva</Card.Title>
              <Card.Text>
                Especialista em Categoria B com mais de 10 anos de experiência. Focada em aulas para quem tem medo de dirigir.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Instrutor 2 */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Img 
                variant="top" 
                src={InstructorsImages[1]} 
                className="instructor-img mb-3"
              />
              <Card.Title as="h4">Carlos Mendes</Card.Title>
              <Card.Text>
                Instrutor de Categoria A (Moto). Apaixonado por direção defensiva e segurança no trânsito.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Instrutor 3 */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Img 
                variant="top" 
                src={InstructorsImages[2]} 
                className="instructor-img mb-3"
              />
              <Card.Title as="h4">Juliana Costa</Card.Title>
              <Card.Text>
                Coordenadora de ensino. Focada nas aulas teóricas online e na preparação para a prova do Detran.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    );
}

export default InstructorsSection;