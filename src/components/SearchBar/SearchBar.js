import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleInput }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by name or position applied ..."
      onChange={e => handleInput(e.target.value)}
    />
  );
};

export default SearchBar;
