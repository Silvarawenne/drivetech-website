import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';

function Footer(){
    return(
        <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Coluna 1: Copyright */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            © 2024 DriveTech. Todos os direitos reservados. <br/>
            Projeto de Faculdade.
          </Col>
          
          {/* Coluna 2: Ícones de Redes Sociais */}
          <Col md={6} className="text-center text-md-end">
            <a href="#facebook" className="text-light me-3 fs-4">
              <FaFacebook />
            </a>
            <a href="#instagram" className="text-light me-3 fs-4">
              <FaInstagram />
            </a>
            <a href="#whatsapp" className="text-light fs-4">
              <FaWhatsapp />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
    );
}

export default Footer;