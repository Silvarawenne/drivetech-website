import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function ContactSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Inicia o "carregando"
    setFeedback('');  // Limpa mensagens antigas

    const dadosFormulario = { nome, email, mensagem };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFormulario),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback(data.message);
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        setFeedback('Ocorreu um erro ao enviar a mensagem.');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setFeedback('Erro de conexão. Tente novamente mais tarde.');
    } finally {

      setLoading(false);
    }
  };

  return (
    <Container as="section" id="contact" className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-5">Fale Conosco</h2>
          <p className="text-center text-muted mb-4">
            Tem alguma dúvida? Preencha o formulário abaixo e nossa equipe entrará em contato.
          </p>

          <Form onSubmit={handleSubmit}>
            {/* Campo Nome */}
            <Form.Group className="mb-3" controlId="formNome">
              <Form.Label>Seu Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Form.Group>

            {/* Campo E-mail */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Seu E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="seu.email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            {/* Campo Mensagem */}
            <Form.Group className="mb-3" controlId="formMensagem">
              <Form.Label>Sua Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Deixe sua dúvida ou sugestão..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              />
            </Form.Group>

            {/* Alerta de Feedback */}
            {feedback && (
              <Alert variant={feedback.includes('sucesso') ? 'success' : 'danger'} className="mt-3">
                {feedback}
              </Alert>
            )}

            {/* Botão de Envio */}
            <div className="text-center mt-4">
              <Button
                variant="success"
                type="submit"
                size="lg"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactSection;