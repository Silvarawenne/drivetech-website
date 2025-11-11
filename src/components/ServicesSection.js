import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import './ServicesSection.css';

const PRECO_CARRO = 1500;
const PRECO_MOTO = 1000;
const PRECO_AULA_EXTRA = 50;

function ServicesSection() {
    const [habilitaCarro, setHabilitaCarro] = useState(false);
    const [habilitaMoto, setHabilitaMoto] = useState(false);
    const [aulasExtras, setAulasExtras] = useState(0);
    
    const [totalPrice, setTotalPrice]= useState(0);



    useEffect(() => {
        let newTotal = 0;

        if (habilitaCarro) {
            newTotal += PRECO_CARRO;
        }
        if (habilitaMoto) {
            newTotal += PRECO_MOTO;
        }

        const numAulasExtras = Number(aulasExtras) || 0;
        newTotal += numAulasExtras * PRECO_AULA_EXTRA;

        setTotalPrice(newTotal);
    }, [habilitaCarro, habilitaMoto, aulasExtras]);

    return (
        <Container as='section' id='services' className='py-5'>
            <h2 className='text-center mb-5'>Monte seu paconte online</h2>
            <Row>
                <Col md={7}>
                    <Card className="p-4 shadow-sm">
                        <Form>
                            <h4>1. Selecione suas Categorias:</h4>
                            <Form.Check
                                type="checkbox"
                                id="check-moto"
                                label={`Habilitação Moto (A) - R$ ${PRECO_MOTO.toFixed(2)}`}
                                checked={habilitaMoto}
                                onChange={(e) => setHabilitaMoto(e.target.checked)}
                                className="mb-3 fs-5"
                                
                            />
                            <Form.Check
                                type="checkbox"
                                id="check-carro"
                                label={`Habilitação Carro (B) - R$ ${PRECO_CARRO.toFixed(2)}`}
                                checked={habilitaCarro}
                                onChange={(e) => setHabilitaCarro(e.target.checked)}
                                className="mb-3 fs-5"
                            />

                            <hr className="my-4" />

                            <h4>2. Aulas Adicionais (Opcional):</h4>
                            <Form.Group as={Row} className="align-items-center">
                                <Form.Label column sm={8} className="fs-5">
                                    Aulas Práticas Extras (R$ {PRECO_AULA_EXTRA.toFixed(2)}/aula)
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        value={aulasExtras}
                                        onChange={(e) => setAulasExtras(e.target.value)}
                                        className="fs-5 text-center"
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card>
                </Col>

                <Col md={5} className="mt-4 mt-md-0">
                    <Card className="p-4 text-center shadow-sm sticky-top" style={{ top: '100px' }}>
                        <Card.Body>
                            <Card.Title as="h3">Valor Total Estimado:</Card.Title>
                            <div className="total-price-display my-4">

                                {totalPrice.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })}
                            </div>
                            <Button variant="success" size="lg" className="w-100">
                                Matricular Agora
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default ServicesSection;