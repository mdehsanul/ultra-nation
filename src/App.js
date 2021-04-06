import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import CountryInfo from "./components/CountryInfo/CountryInfo";

function App() {
  // useState function with Destructuring
  const [country, setCountry] = useState([]);
  const [cart, setCart] = useState([]);
  // useEffect function
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((error) => console.log(error));
  }, []); // use [] -> for load data 1 time or assign dependency

  // eventhandler
  const handleAddCountry = (props) => {
    const newCart = [...cart, props];
    setCart(newCart);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Country Loaded: {country.length}</h1>
      <Cart cart={cart}></Cart>
      {country.map((country) => (
        <CountryInfo
          countryInfo={country}
          key={country.alpha3Code}
          handleAddCountry={handleAddCountry}
        ></CountryInfo>
      ))}
    </div>
  );
}

export default App;
