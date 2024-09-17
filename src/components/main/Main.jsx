import { useContext } from "react";
import { Tasks } from "../tasks/Tasks";
import style from "./Main.module.css";
import { GlobalContext } from "../../context/GlobalContext";

export function Main() {
  const { updateOptionsMenuStatus } = useContext(GlobalContext);

  return (
    <main onClick={() => updateOptionsMenuStatus(-1)} className={style.content}>
      <h1 className={style.title}>Darbų planavimo platforma</h1>
      <Tasks />
      <div className={style.background}></div>
    </main>
  );
}
