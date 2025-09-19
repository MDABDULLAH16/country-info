import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  //   console.log(country);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // setVisited(visited ? false : true);

    setVisited(!visited);
  };
  return (
    <div className="country">
      <img src={country?.flags?.flags?.png} alt="" />
      <h3>{country?.name?.common}</h3>
      <strong> capital: {country?.capital?.capital}</strong> <br />
      <p>{country?.name?.official}</p>
      <p>area: {country.area.area}</p>
      <button onClick={handleVisited}>
        {visited ? "visited" : "Non Visited"}
      </button>
    </div>
  );
};

export default Country;
