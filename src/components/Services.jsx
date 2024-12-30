// src/pages/Services.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Our Services</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="left" src="https://via.placeholder.com/200" />
            <Card.Body>
              <Card.Title>Framing</Card.Title>
              <Card.Text>We provide custom framing for your art pieces.</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Add additional services here */}
      </Row>
    </Container>
  );
};

export default Services;
