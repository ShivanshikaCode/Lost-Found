import React from "react";
import './search.css';


function Search({ setSearchTerm }) {
  return (
    <div className="container">
      <input
        className="search"
        type="text"
        placeholder="🔍 Search lost item by name..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
