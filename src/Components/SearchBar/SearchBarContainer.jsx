import React from "react";
import SearchBar from "./SearchBar";

const SearchBarContainer = ({
  getDigimons,
  setFilter,
  setQuery,
  query,
  filter,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    getDigimons({ query, filter });
  };

  const handleChangeName = (event) => {
    const newName = event.target.value;
    setQuery(newName);
  };

  const handleChangeFilter = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
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
