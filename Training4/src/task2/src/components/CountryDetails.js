import React from 'react';

const CountryDetails = ({ name, capital, flag, region, area, population }) => {
  return (
    <div>
      <img src={flag} alt='loading' height='100px' width='200px'></img>
      <h4>{name}</h4>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <hr />
      <br />
    </div>
  );
};

export default CountryDetails;
