import React, { useState }from "react";

function SearchBar({onSearch}) {

  const searchStyle = {
    textAlign: "center",
   
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch);

  }

  const [currentSearch, setCurrentSearch] = useState('')


  return (
    <form style={searchStyle} className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Movies:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default SearchBar;
