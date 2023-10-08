import React, { useState } from "react";
import SearchDetails from "../Modules/SearchDetails";

function Api() {
  const [inputUsername, setInputUsername] = useState("");
  const [searchUsername, setSearchUsername] = useState(null);

  // Function to update the inputUsername
  const handleInputChange = (e) => {
    setInputUsername(e.target.value);
  };

  // Function to update the searchUsername when the form is submitted
  const handleSearch = (e) => {
    e.preventDefault();

    setSearchUsername(inputUsername);
  };

  // Passess searchUsername as props to SearchDetails module
  return (
    <div>
      <div className="App-api-container">
        <div className="App-api-search">
          <h2>Search:</h2>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Username"
              value={inputUsername}
              required
              onChange={handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
          <div className="App-api-searchView">
            <SearchDetails searchUsername={searchUsername} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;
