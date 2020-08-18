import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Trainers() {
  const [trainers, settrainers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/trainers")
      .then(response => response.json())
      .then(trainers => settrainers(trainers));
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {trainers.map(shoe => {
          return (
            <Col className="mb-5 " key={shoe.id} xs={12} md={6} lg={4} xl={3}>
              <Card>
                <Link to={"/trainers/" + shoe.id.toString()}>
                  <Card.Img variant="top" src={shoe.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title>Addidas X Running Trainers</Card.Title>
                  <Card.Text>£{trainers.price}</Card.Text>
                  <Form.Group
                    style={{
                      maxWidth: "fit-content",
                      maxHeight: "100px",
                      overflowY: "scroll !important"
                    }}
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Label>Select Size</Form.Label>
                    <Form.Control
                      style={{
                        maxHeight: "100px",
                        overflowY: "scroll"
                      }}
                      as="select"
                    >
                      {Array.from(Array(10)).map((v, i) => (
                        <option key={i}>{i + 1}</option>
                      ))}
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

export default Trainers;
