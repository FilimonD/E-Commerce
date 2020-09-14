import React, { useState } from "react";
import { useStore } from "./storeContext";
import { Button, Container, Row } from "react-bootstrap";

function CheckoutScreen() {
  const { state, dispatch } = useStore();

  function removeFromCart(item) {
    dispatch({ product: item, type: "remove" });
  }
  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  function getTotal() {
    const totalPrice = state.reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0);
    return totalPrice;
  }

  return (
    <Container className="ml-2 mt-5 checkout">
      <table className="mt-5 ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
            <th>Color</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>

              <td>£{item.price}</td>
              <td>{item.size}</td>
              <td>{item.color}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  className="ml-1 py-0"
                  onClick={() => removeFromCart(item)}
                  variant="primary"
                >
                  Remove from cart
                </Button>
              </td>
            </tr>
          ))}

          <tr>
            <td>Total items:{state.length}</td>
            <td style={{ textAlign: "end" }}>Total:£{getTotal()}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default CheckoutScreen;
