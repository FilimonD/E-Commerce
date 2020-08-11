import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

function App() {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/shoes")
      .then(response => response.json())
      .then(shoes => setShoes(shoes));
  }, []);

  return (
    <div className="App">
      <Navbar />

      {shoes.map(shoe => {
        return (
          <div key={shoe.id}>
            <div>{shoe.price}</div>
            <img src={shoe.imageUrl} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
