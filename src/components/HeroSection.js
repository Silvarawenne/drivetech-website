import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-section'>
            <Container>
                < Row className='align-items-center text-center text-md-start'>
                    <Col md={7}>
                        <h1 className="hero-title">Sua liberdade começa aqui.</h1>
                        <h2 className="hero-subtitle">Tire sua habilitação de forma simples e digital.</h2>
                        <Button variant="success" size="lg" href="#services" className="mt-3">
                            Conheça Nossos Pacotes
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroSection;