import React, { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

import { DataContext } from "./components/dataContext/DataContext";
export function App() {
  const [headerData, setHeaderData] = useState("false");

  return (
    <DataContext.Provider value={{ headerData, setHeaderData }}>
      <Header />
      <Main />
      <Footer />
    </DataContext.Provider>
  );
}
