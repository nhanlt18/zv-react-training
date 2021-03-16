import React, { useState, useEffect } from 'react';
import country from './apis/country';
import './App.css';
import CountryDetails from './components/CountryDetails';
import SearchBar from './components/SearchBar';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const respond = await country.get('/all');

    setCountries(respond.data);
  };

  const onTermSubmit = async (searchTerm) => {
    if (!searchTerm) {
      fetchAll();
    } else {
      const respond = await country.get(`/name/${searchTerm}`.trim());

      setCountries(respond.data);
    }
  };

  return (
    <div className='App'>
      <h1>Simple Search For Countries All Around The World</h1>
      <SearchBar onTermSubmit={onTermSubmit} /> <br />
      <div>
        {countries.map((country) => (
          <CountryDetails
            key={country.name}
            name={country.name}
            capital={country.capital}
            region={country.region}
            area={country.area}
            population={country.population}
            flag={country.flag}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
