import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useStore, storeContext } from "./storeContext";
import Accessory from "./Accessory";

function AccessoriesScreen() {
  const [accessories, setAccessories] = useState([]);
  const { state, dispatch } = useStore();
  useEffect(() => {
    fetch("https://bouna-sal.herokuapp.com/accessories")
      .then(response => response.json())
      .then(accessories => setAccessories(accessories));
  }, []);

  function addToCart(accessory) {
    dispatch({ product: accessory, type: "add" });
  }

  return (
    <Container className="my-5">
      <Row>
        {accessories.map(accessory => {
          return (
            <Accessory
              key={accessory.id}
              id={accessory.id}
              imageUrl={accessory.imageUrl}
              price={accessory.price}
              name={accessory.name}
              addToStore={addToCart}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default AccessoriesScreen;
