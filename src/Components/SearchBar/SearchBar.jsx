import React from "react";
import "./searchbar.css";
const SearchBar = ({ handleChangeFilter, handleChangeName, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChangeName}
        name="name"
        placeholder="Agumon, metalgarurumo, myotismon..."
        className="input__prop"
      />
      <select
        name="filter"
        onChange={handleChangeFilter}
        className="select__prop">
        <option value="">--Seleccione el Filtro--</option>
        <option value="name">Name</option>
        <option value="level">Level</option>
      </select>
      <button
        type="submit"
        className="btn">
        Search
      </button>
    </form>
  );
};

export default React.memo(SearchBar);
