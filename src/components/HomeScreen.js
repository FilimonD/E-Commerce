import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Jumbotron } from "react-bootstrap";

function HomeScreen() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(categories => setCategories(categories));
  }, []);

  return (
    <>
      <Jumbotron fluid className="hero">
        <Container style={{ paddingBottom: "8rem", paddingTop: "8rem" }}>
          <h1>Check out the latest products</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>

      <Container className="my-5 gym">
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
                  <Card className="mt-5">
                    <Card.Img
                      variant="top"
                      src={category.imageUrl}
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "contain"
                      }}
                    />
                    <Card.Body className="py-1">
                      <Card.Title
                        className="mb-1 text-center"
                        style={{ textDecoration: "none", color: "blue" }}
                      >
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
    </>
  );
}

export default HomeScreen;
