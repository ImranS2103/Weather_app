import React from 'react';
import "./SearchBar.css"

const SearchBar = () => {

  return (
    <div className="horizontal-search-bar">
    <input
        type="text"
        placeholder="Search..."
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;