import React from "react";
import SearchBar from "./SearchBar";

const SearchBarContainer = ({ getDigimons, setFilter, setQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    getDigimons();
  };

  const handleChangeName = (event) => {
    setQuery(event.target.value);
  };

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <SearchBar
      handleSubmit={handleSubmit}
      handleChangeFilter={handleChangeFilter}
      handleChangeName={handleChangeName}
    />
  );
};

export default SearchBarContainer;
