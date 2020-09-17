import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Trainers from "./components/Trainers";
import HomeScreen from "./components/HomeScreen";
import ClothingScreen from "./components/ClothingScreen";
import AccessoriesScreen from "./components/AccessoriesScreen";
import { StoreProvider } from "./components/storeContext";
import CheckoutScreen from "./components/CheckoutScreen";
import NotFound from "./components/NotFound";
import index from "./index.css";
import { NOTFOUND } from "dns";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/trainers">
              <Trainers />
            </Route>

            <Route exact path="/clothings">
              <ClothingScreen />
            </Route>

            <Route exact path="/accessories">
              <AccessoriesScreen />
            </Route>

            <Route exact path="/checkout">
              <CheckoutScreen />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <footer className="footer"> All rights Reserved</footer>
    </StoreProvider>
  );
}

export default App;
