import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ fetchCountry }) => {
  const countriesData = use(fetchCountry);
  const countries = countriesData.countries;
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <h2>count Visited country: {visitedCountry.length}</h2>
      <ol>
        {visitedCountry.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
