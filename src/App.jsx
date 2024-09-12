import React, { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Form } from "./components/form/Form";

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
