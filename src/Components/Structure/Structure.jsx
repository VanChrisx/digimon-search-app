import React from "react";
import useDigimons from "../useDigimons/useDigimons";
import { DigimonsContainer } from "../Digimons/DigimonsContainer";

const Structure = () => {
  const { digimons } = useDigimons();

  return (
    <div>
      <header>
        <h1>digimons</h1>
        <form className="form">
          <input placeholder="Agumon,gabumon, metalgarurumon..." />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <DigimonsContainer digi={digimons} />
      </main>
    </div>
  );
};

export default Structure;
