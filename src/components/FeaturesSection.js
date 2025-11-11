import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCar, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';
import './FeaturesSection.css';

function FeaturesSection() {
    return (
        <Container as="section" id="features" className="py-5 bg-light">
            <h2 className="text-center mb-5">Por que escolher a DriveTech?</h2>

            <Row className="text-center">
                <Col md={4} className='mb-4'>
                    <FaCar size={70} className="feature-icon mb-3" />
                    <h3>Frota Moderna</h3>
                    <p>Aprenda a dirigir nos carros mais novos e seguros do mercado, todos equipados com ar-condicionado e direção hidráulica.</p>
                </Col>

                <Col md={4} className="mb-4">
                    <FaCalendarAlt size={70} className="feature-icon mb-3" />
                    <h3>Agendamento Digital</h3>
                    <p>Chega de burocracia. Agende suas aulas práticas e teóricas diretamente pelo nosso aplicativo, quando e onde quiser.</p>
                </Col>

                <Col md={4} className="mb-4">
                    <FaLaptopCode size={70} className="feature-icon mb-3" />
                    <h3>Aulas Teóricas Online</h3>
                    <p>Estude no seu próprio ritmo com nossa plataforma de ensino a distância, com vídeos, simulados e suporte ao vivo.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default FeaturesSection;