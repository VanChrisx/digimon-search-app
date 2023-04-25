import React from "react";

const SearchBar = ({ handleChangeFilter, handleChangeName, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChangeName}
        name="name"
        placeholder="Agumon, metalgarurumo, myotismon..."
      />
      <select name="filter" onChange={handleChangeFilter}>
        <option value="">--Seleccione el Filtro--</option>
        <option value="name">Name</option>
        <option value="level">Level</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
