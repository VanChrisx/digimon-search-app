import RenderDigimons from "./Digimons";

const DigimonsContainer = ({ digi }) => {
  const hasDigimons = digi?.length > 0;

  return hasDigimons ? <RenderDigimons digi={digi} /> : <h1>No hay nada</h1>;
};

export { DigimonsContainer };
