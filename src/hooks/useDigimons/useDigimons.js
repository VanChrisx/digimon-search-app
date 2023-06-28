import { useCallback, useState } from "react";
import { searchDigimon } from "../searchDigimon/searchDigimon";

export const useDigimons = ({ filter, query }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [digimonsData, setDigimonsData] = useState([]);

  const getDigimons = useCallback(async ({ filter, query }) => {
    try {
      setLoading(true);
      setError(null);
      const newDigimons = await searchDigimon({ filter, query });
      setDigimonsData(newDigimons);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { digimonsData, getDigimons, error, loading };
};
