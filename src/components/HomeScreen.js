import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

function HomeScreen() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(categories => setCategories(categories));
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {categories.map(category => {
          return (
            <Col
              key={category.id}
              className="mb-5 "
              xs={12}
              md={6}
              lg={4}
              xl={4}
            >
              <Link to={category.name}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={category.imageUrl}
                    style={{
                      maxHeight: 350,
                      width: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <Card.Body className="py-1">
                    <Card.Title className="mb-1 text-center">
                      {category.name.toUpperCase()}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HomeScreen;
