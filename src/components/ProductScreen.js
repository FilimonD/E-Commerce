import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useStore } from "./storeContext";

function ProductScreen() {
  const { state, dispatch } = useStore();
  console.log(state);

  const { pathname } = useLocation();
  const [item, setItem] = useState(null);
  const history = useHistory();
  useEffect(() => {
    fetch("http://localhost:3001" + pathname)
      .then(response => response.json())
      .then(item => setItem(item));
  }, []);

  function goBackHandle() {
    history.goBack();
  }

  // function getTotal(cart) {
  //   const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  //   return total.toLocaleString(undefined, currencyOptions);
  // }

  function addToCart() {
    dispatch({ product: item, type: "add" });
  }

  function removeFromCart() {
    dispatch({ product: item, type: "remove" });
  }

  return (
    <div className="col-6">
      {item ? (
        <div>
          <Button className="m-3" onClick={goBackHandle}>
            Go back
          </Button>
          <div className="col-12">
            <img
              className="m-3"
              src={item.imageUrl}
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="d-flex justify-content-end flex-column ">
            <ul>
              <li>
                <h4>{item.name}</h4>
              </li>
              <li>
                <b>Price: £{item.price}</b>
              </li>
              <li>
                Qty:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </li>
              <li>
                <div>Description : {item.description}</div>
              </li>
              <div className="mt-2">
                <Button onClick={addToCart}>Add to Cart</Button>
                <Button
                  className="ml-2"
                  variant="secondary"
                  onClick={removeFromCart}
                >
                  Remove
                </Button>
              </div>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default ProductScreen;
