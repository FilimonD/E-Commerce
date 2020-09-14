import React, { useState, useEffect } from "react";
import { Container, Row} from "react-bootstrap";
import { useStore } from "./storeContext";
import Clothing from "./Clothing";

function ClothingScreen() {
  const [clothings, setClothings] = useState([]);
  const { state, dispatch } = useStore();
  useEffect(() => {
    fetch("https://bouna-sal.herokuapp.com/clothings")
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
            <Clothing
              key={clothing.id}
              id={clothing.id}
              imageUrl={clothing.imageUrl}
              price={clothing.price}
              name={clothing.name}
              addToStore={addToCart}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default ClothingScreen;
