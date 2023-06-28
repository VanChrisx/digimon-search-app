import React from "react";
import { Digimons } from "../Digimons/Digimons";
import { useDigimons } from "../../hooks/useDigimons/useDigimons";
import useSearch from "../../hooks/useSearch/useSearch";
import Title from "../Title/Title";
import SearchBarContainer from "../SearchBar/SearchBarContainer";

const Structure = () => {
  const { query, filter, setFilter, setQuery } = useSearch();
  const { digimonsData, getDigimons, error, loading } = useDigimons({
    query,
    filter,
  });

  return (
    <section>
      <header>
        <Title title="Digimon Search" />
        <SearchBarContainer
          getDigimons={getDigimons}
          setFilter={setFilter}
          setQuery={setQuery}
          query={query}
          filter={filter}
        />
        <p
          style={{
            textAlign: "center",
            marginBottom: "2%",
            color: "var(--color-white)",
          }}>
          Levels: Fresh,Training, Rookie, Mega, Champion, Armor, Ultimate.
        </p>
      </header>

      <main>
        {loading ? (
          <h1>Cargando ...</h1>
        ) : error ? (
          <Title title={error} />
        ) : (
          <Digimons digimonsData={digimonsData} />
        )}
      </main>
    </section>
  );
};

export default Structure;
