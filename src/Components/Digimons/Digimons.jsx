export function ListOfDigimons({ digimonsData }) {
  return (
    <ul>
      {digimonsData?.map((digi) => (
        <li key={digi.title}>
          <img src={digi.img} alt={digi.name} />
          <h3>{digi.title}</h3>
          <h4>{digi.level}</h4>
        </li>
      ))}
    </ul>
  );
}

export function Digimons({ digimonsData }) {
  const hasDigimons = digimonsData?.length > 0;

  return hasDigimons ? (
    <ListOfDigimons digimonsData={digimonsData} />
  ) : (
    <h1>No hay nada</h1>
  );
}
