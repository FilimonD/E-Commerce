import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useStore } from "./storeContext";
import Trainer from "./Trainer";

function Trainers() {
  const [trainers, settrainers] = useState([]);
  const { state, dispatch } = useStore();

  useEffect(() => {
    fetch("http://localhost:3001/trainers")
      .then(response => response.json())
      .then(trainers => settrainers(trainers));
  }, []);

  function addToCart(shoeItem) {
    dispatch({ product: shoeItem, type: "add" });
  }

  return (
    <Container className="my-5">
      <Row>
        {trainers.map(shoe => {
          return (
            <Trainer
              key={shoe.id}
              id={shoe.id}
              imageUrl={shoe.imageUrl}
              price={shoe.price}
              name={shoe.name}
              addToStore={addToCart}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default Trainers;
