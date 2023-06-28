import "./digimons.css";

export function ListOfDigimons({ digimonsData }) {
  return (
    <ul>
      {digimonsData?.map((digi) => (
        <div
          className="card__contain"
          key={digi.title}>
          <img
            src={digi.img}
            alt={digi.name}
          />
          <h2>{digi.title}</h2>
          <h3>{digi.level}</h3>
        </div>
      ))}
    </ul>
  );
}

export function Digimons({ digimonsData }) {
  const hasDigimons = digimonsData?.length > 0;

  return hasDigimons ? <ListOfDigimons digimonsData={digimonsData} /> : null;
}
