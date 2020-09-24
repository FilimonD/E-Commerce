import React, { useState } from "react";

import { useStore } from "./storeContext";
import { Button, Container, Table } from "react-bootstrap";

function CheckoutScreen() {
  const { state, dispatch } = useStore();

  function removeFromCart(item) {
    dispatch({ product: item, type: "remove" });
  }

  function getTotal() {
    const totalPrice = state.reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0);
    return totalPrice;
  }

  return (
    <Container className="ml-2 mt-5 checkout">
      <Table id="checkout" className="mt-5" responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
            <th>Quantity</th>
           
          </tr>
        </thead>
        <tbody>
          {state.map(item => (
            <tr key={item.name}>
              <td>
                {item.name} {item.color && ` (${item.color})`}
              </td>

              <td>£{item.price.toFixed(2)}</td>
              <td>{item.size || "-"}</td>

              <td>{item.quantity}</td>
              <td>
                <Button
                  className="ml-1 py-0"
                  onClick={() => removeFromCart(item)}
                  variant="primary"
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}

          <tr>
            <td style={{ textAlign: "end" }} colSpan="2" id="total">
              Total is :£{getTotal().toFixed(2)}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default CheckoutScreen;
