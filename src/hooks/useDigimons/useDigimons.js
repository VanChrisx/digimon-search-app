import { useState } from "react";

export const useDigimons = ({ filter, query }) => {
  const [responseDigimon, setResponseDigimon] = useState([]);

  const digimonsData = responseDigimon;

  const mappedDigimons = digimonsData?.map((digi) => ({
    title: digi.name,
    level: digi.level,
    img: digi.img,
  }));

  const getDigimons = () => {
    if (query && filter) {
      fetch(`https://digimon-api.vercel.app/api/digimon/${filter}/${query}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseDigimon(json);
        });
    } else {
      <h1>No hay peliculas para mostrar</h1>;
    }
  };

  return { digimonsData: mappedDigimons, getDigimons };
};
