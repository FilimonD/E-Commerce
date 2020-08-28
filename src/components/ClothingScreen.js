import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useStore, storeContext } from "./storeContext";

function ClothingScreen() {
  const [clothings, setClothings] = useState([]);
  const { state, dispatch } = useStore();
  useEffect(() => {
    fetch("http://localhost:3001/clothings")
      .then(response => response.json())
      .then(clothings => setClothings(clothings));
  }, []);

  function addToCart(clothing) {
    dispatch({ product: clothing, type: "add" });
  }

  return (
    <Container className="my-5">
      <Row>
        {clothings.map(clothing => {
          return (
            <Col
              className="mb-4 "
              key={clothing.id}
              xs={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Card>
                <Link to={"/clothings/" + clothing.id.toString()}>
                  <Card.Img
                    style={{ height: "300px", objectFit: "contain" }}
                    variant="top"
                    src={clothing.imageUrl}
                  />
                </Link>
                <Card.Body style={{ height: "280px" }}>
                  <Card.Title style={{ height: "48px" }}>
                    {clothing.name}
                  </Card.Title>
                  <Card.Text>£{clothing.price}</Card.Text>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Size</Form.Label>
                    <Form.Control as="select">
                      <option>X-Small</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </Form.Control>
                  </Form.Group>

                  <Button onClick={() => addToCart(clothing)} variant="primary">
                    Add To Cart
                  </Button>
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
