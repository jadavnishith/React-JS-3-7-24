import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Cardcounter() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { id: 1, content: "Card 1" },
        { id: 2, content: "Card 2" },
        { id: 3, content: "Card 3" }
      ];

      const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      };
    
      const previousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      };

  return (
    <>
         <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="align-items-center">
        <Col>
          <Button variant="primary" onClick={previousCard}>Previous</Button>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>
                {cards[currentIndex].content}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Button variant="primary" onClick={nextCard}>Next</Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Cardcounter
