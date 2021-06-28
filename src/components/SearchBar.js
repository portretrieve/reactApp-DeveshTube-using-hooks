import React, { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onSearch }) => {
  const [userInput, setUserInput] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearch(userInput);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <input
            type="text"
            name="videoSearch"
            id="videoSearch"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            placeholder="Type to search video"
          />
          <br /> <br />
          <button>Click to Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
