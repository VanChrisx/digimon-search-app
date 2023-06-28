export const searchDigimon = async ({ query, filter }) => {
  if (query === "" || filter === "") return null;

  try {
    const promise = await fetch(
      `https://digimon-api.vercel.app/api/digimon/${filter}/${query}`
    );

    const json = await promise.json();

    const digimons = json;

    return digimons?.map((digi) => ({
      title: digi.name,
      level: digi.level,
      img: digi.img,
    }));
  } catch (e) {
    throw new Error("Busqueda invalida, el Digimon o Level no existen");
  }
};
