import { useContext } from "react";
import { Form } from "../form/Form";
import { Tasks } from "../tasks/Tasks";
import style from "./Main.module.css";
import { GlobalContext } from "../../context/GlobalContext";

export function Main() {
  return (
    <main className={style.content}>
      <h1 className={style.title}>Darbų planavimo platforma</h1>
      {/* <Form lightboxVisible={lightboxVisible} /> */}
      <Tasks />
      <div className={style.background}></div>
    </main>
  );
}
