import { useState } from "react";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  return { query, setQuery, filter, setFilter };
};

export default useSearch;
