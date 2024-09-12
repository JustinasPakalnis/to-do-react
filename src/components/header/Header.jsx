import logo from "../../assets/logo.ico";
import { Button } from "../button/Button";
import { Stats } from "../stats/Stats";
import style from "./Header.module.css";
import React, { useContext } from "react";
import { DataContext } from "../dataContext/DataContext";
export function Header() {
  const { setHeaderData } = useContext(DataContext);

  const handleClick = () => {
    const dataToSend = "true";
    setHeaderData(dataToSend); // Update the context with the new data
  };

  return (
    <header className={style.mainHeader}>
      <img className={style.logo} src={logo} alt="Logo" />
      <Stats />

      <Button onClick={handleClick} text="New task" icon="+" />
    </header>
  );
}
