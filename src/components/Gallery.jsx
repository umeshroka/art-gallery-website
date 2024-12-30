// src/pages/Gallery.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Gallery = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Gallery</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Artwork Title</Card.Title>
              <Card.Text>Some description of the artwork.</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Repeat similar <Col> blocks for other artworks */}
      </Row>
    </Container>
  );
};

export default Gallery;
