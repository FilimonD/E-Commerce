import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Card, Button, Form } from "react-bootstrap";

const sizes = Array.from(Array(10), (_, i) => i + 1);
const quantities = Array.from(Array(10), (_, i) => i + 1);

function Trainer(props) {
  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(quantities[0]);

  const handleSizeChange = event => {
    setSize(event.target.value);
  };

  const handleQuantityChange = event => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    const shoeItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.imageUrl,
      size: size,
      quantity: quantity
    };

    props.addToStore(shoeItem);
  };

  return (
    <Col className="mb-5" xs={12} md={6} lg={4} xl={3}>
      <Card>
        <Link to={"/trainers/" + props.id.toString()}>
          <Card.Img
            style={{ height: "300px", objectFit: "contain" }}
            variant="top"
            src={props.imageUrl}
          />
        </Link>
        <Card.Body style={{ height: "100%" }}>
          <Card.Title style={{ height: "48px" }}>
            <h6>{props.name}</h6>
          </Card.Title>
          <Card.Text>£{props.price.toFixed(2)}</Card.Text>
          <Form.Group
            style={{ maxWidth: "fit-content" }}
            controlId="exampleForm.ControlSelect1"
          >
            <Form.Label>Select Size</Form.Label>
            <Form.Control as="select" onChange={handleSizeChange} value={size}>
              {sizes.map(size => (
                <option key={size}>{size}</option>
              ))}
            </Form.Control>
            <Form.Label> Quantity</Form.Label>
            <Form.Control
              style={{ maxWidth: "fit-content" }}
              as="select"
              onChange={handleQuantityChange}
              value={quantity}
            >
              {quantities.map(quantity => (
                <option key={quantity}>{quantity}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Button onClick={handleAddToCart} variant="primary">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Trainer;
