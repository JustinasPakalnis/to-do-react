import logo from "../../assets/logo.ico";
import { Button } from "../button/Button";
import { Stats } from "../stats/Stats";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.mainHeader}>
      <img className={style.logo} src={logo} alt="Logo" />
      <Stats />
      <Button text="New task" icon="+" />
    </header>
  );
}
