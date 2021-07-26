import React, { useState } from "react";
import Main from "./components/main/Main";
import Nav from "./components/navbar/Nav";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [filters, setFilters] = useState({
    size: [],
    brand: [],
    idealFor: [],
  });
  function cancelAll() {
    setFilters({
      size: [],
      brand: [],
      idealFor: [],
    });
  }
  function handleFilters(type, filter) {
    switch (type) {
      case "size":
        if (filters.size.includes(filter))
          return setFilters({
            ...filters,
            size: filters.size.filter((el) => el !== filter),
          });
        setFilters({ ...filters, size: [...filters.size, filter] });
        break;

      case "brand":
        if (filters.brand.includes(filter))
          return setFilters({
            ...filters,
            brand: filters.brand.filter((el) => el !== filter),
          });
        setFilters({ ...filters, brand: [...filters.brand, filter] });
        break;

      case "idealFor":
        if (filters.idealFor.includes(filter))
          return setFilters({
            ...filters,
            idealFor: filters.idealFor.filter((el) => el !== filter),
          });
        setFilters({ ...filters, idealFor: [...filters.idealFor, filter] });
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <Nav />
      <Sidebar cancelAll={cancelAll} addFilter={handleFilters} />
      <Main filters={filters} />
    </div>
  );
}

export default App;
