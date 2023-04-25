import React from "react";
import { Digimons } from "../Digimons/Digimons";
import { useDigimons } from "../../hooks/useDigimons/useDigimons";
import useSearch from "../../hooks/useSearch/useSearch";
import Title from "../Title/Title";
import SearchBarContainer from "../SearchBar/SearchBarContainer";

const Structure = () => {
  const { query, filter, setFilter, setQuery } = useSearch();
  const { digimonsData, getDigimons } = useDigimons({ query, filter });

  return (
    <div>
      <header>
        <Title />
        <SearchBarContainer
          getDigimons={getDigimons}
          setFilter={setFilter}
          setQuery={setQuery}
        />
      </header>

      <main>
        <Digimons digimonsData={digimonsData} />
      </main>
    </div>
  );
};

export default Structure;
