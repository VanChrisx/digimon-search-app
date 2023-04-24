const RenderDigimons = ({ digi }) => {
  return (
    <ul>
      {digi.map((digimons) => (
        <li key={digimons.name}>
          <img src={digimons.img} alt="" />
          <h3>{digimons.name}</h3>
          <h4>{digimons.level}</h4>
        </li>
      ))}
    </ul>
  );
};

export default RenderDigimons;
