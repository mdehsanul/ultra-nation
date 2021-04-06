import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  // reduce() work manually
  //   let totalPopulation = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     const country = cart[i];
  //     totalPopulation += country.population;
  //   }

  // reduce() function
  const totalPopulation = cart.reduce(
    (sum, country) => sum + country.population,
    0
  );
  return (
    <div className="countryCart">
      <h2>Country Added: {cart.length}</h2>
      <p>totalPopulation: {totalPopulation}</p>
    </div>
  );
};

export default Cart;
