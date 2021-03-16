import React, { useState, useCallback } from 'react';
import _ from 'lodash';

const SearchBar = ({ onTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useCallback(
    _.debounce((query) => onTermSubmit(query), 500),
    []
  );

  return (
    <div>
      <form>
        <div>
          <label>Video Search: </label>
          <input
            type='text'
            value={searchTerm}
            onChange={onInputChange}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
