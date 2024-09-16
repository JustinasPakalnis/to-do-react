import logo from "../../assets/logo.ico";
import { Button } from "../button/Button";
import { Stats } from "../stats/Stats";
import style from "./Header.module.css";
import React, { useContext } from "react";

export function Header({ showLightbox }) {
  return (
    <header className={style.mainHeader}>
      <img className={style.logo} src={logo} alt="Logo" />
      <Stats />

      <Button text="New task" icon="+" onClick={showLightbox} />
    </header>
  );
}
