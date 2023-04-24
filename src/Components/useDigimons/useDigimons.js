import digimonData from "../mock/digiApi.json";

const useDigimons = () => {
  const digimons = digimonData;

  const mappedDigimons = digimons?.map((digi) => ({
    name: digi.name,
    level: digi.level,
    img: digi.img,
  }));

  return { digimons: mappedDigimons };
};

export default useDigimons;
