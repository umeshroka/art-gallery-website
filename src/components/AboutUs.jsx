// src/pages/AboutUs.jsx
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <h1 className="text-center my-4">About Us</h1>
      <Row>
        <Col md={12}>
          <p>
            Welcome to our art gallery! We offer a curated selection of contemporary artworks.
            Our mission is to bring the finest art pieces to you.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
