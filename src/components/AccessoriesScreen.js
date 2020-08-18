import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function AccessoriesScreen() {
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/accessories")
      .then(response => response.json())
      .then(accessories => setAccessories(accessories));
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {accessories.map(accessory => {
          return (
            <Col
              className="mb-5 "
              key={accessory.id}
              xs={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Card>
                <Link to={"/accessories/" + accessory.id.toString()}>
                  <Card.Img variant="top" src={accessory.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title>{accessory.name}</Card.Title>
                  <Card.Text>£{accessory.price}</Card.Text>
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

export default AccessoriesScreen;
