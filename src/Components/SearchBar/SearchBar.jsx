import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for Cities..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && <button>Search</button>}
    </div>
  );
}

export default SearchBar;
