import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Trainers from "./components/Trainers";
import HomeScreen from "./components/HomeScreen";
import ClothingScreen from "./components/ClothingScreen";
import ProductScreen from "./components/ProductScreen";
import AccessoriesScreen from "./components/AccessoriesScreen";
import { StoreProvider } from "./components/storeContext";
import CheckoutScreen from "./components/CheckoutScreen";
import index from "./index.css";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/trainers">
              <Trainers />
            </Route>
            <Route path="/trainers/:id">
              <ProductScreen />
            </Route>
            <Route exact path="/clothings">
              <ClothingScreen />
            </Route>
            <Route path="/clothings/:id">
              <ProductScreen />
            </Route>
            <Route exact path="/accessories">
              <AccessoriesScreen />
            </Route>
            <Route path="/accessories/:id">
              <ProductScreen />
            </Route>
            <Route path="/checkout">
              <CheckoutScreen />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <footer className="footer"> All rights Reserved</footer>
    </StoreProvider>
  );
}

export default App;
