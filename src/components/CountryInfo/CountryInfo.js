import React from "react";
import "./CountryInfo.css";

const CountryInfo = (props) => {
  //   Destructuring
  const { name, flag, population, region } = props.countryInfo;
  // eventhandler
  // const handleAddCountry = props.handleAddCountry;
  return (
    <div className="countryStyle">
      <h2>country name: {name}</h2>
      <img src={flag} />
      <p>population: {population}</p>
      <p>Region: {region}</p>
      {/* when using shared eventhandler, to stop automatic execution of -> onClick={handleAddCountry()} event handler 
          at the time of click a button, we use a arrow function -> onClick={() => handleAddCountry(props.countryInfo)} */}
      <button onClick={() => props.handleAddCountry(props.countryInfo)}>
        Add Country
      </button>
    </div>
  );
};

export default CountryInfo;
