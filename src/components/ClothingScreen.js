import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function ClothingScreen() {
  const [clothings, setClothings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/clothings")
      .then(response => response.json())
      .then(clothings => setClothings(clothings));
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {clothings.map(clothing => {
          return (
            <Col
              className="mb-5 "
              key={clothing.id}
              xs={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Card>
                <Link to={"/clothings/" + clothing.id.toString()}>
                  <Card.Img variant="top" src={clothing.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title>Under Armour gym top</Card.Title>
                  <Card.Text>£{clothing.price}</Card.Text>
                  <Form.Group
                    style={{ maxWidth: "fit-content" }}
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Label>Select Size</Form.Label>
                    <Form.Control as="select">
                      <option>X-Small</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ClothingScreen;
