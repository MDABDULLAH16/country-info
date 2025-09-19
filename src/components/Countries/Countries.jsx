import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ fetchCountry }) => {
  const countriesData = use(fetchCountry);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
