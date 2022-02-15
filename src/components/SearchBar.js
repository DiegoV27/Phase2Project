import React, { useState }from "react";

function SearchBar({onSearch}) {

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch);
  }

  const [currentSearch, setCurrentSearch] = useState('')


  return (
    <div className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Movies:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={currentSearch}
        onChange={(e) => setCurrentSearch("Searching...")}
      />
    </div>
  );
}

export default SearchBar;
