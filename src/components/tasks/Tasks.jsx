import { useState, useEffect } from "react";
import { TaskCard } from "./TaskCard";
import style from "./Tasks.module.css";

export function Tasks() {
  const [isOpenID, setIsOpenID] = useState(false);

  function menuOpen(id) {
    setIsOpenID(isOpenID === id ? false : id);
  }

  return (
    <section className={style.taskContent}>
      <div className={style.column}>
        <h2 className={style.title}>Todo</h2>
        <ul className={style.list}>
          <TaskCard id={1} isOpen={isOpenID === 1} menuClick={menuOpen} />
          <TaskCard id={2} isOpen={isOpenID === 2} menuClick={menuOpen} />
          <TaskCard id={3} isOpen={isOpenID === 3} menuClick={menuOpen} />
          <TaskCard id={4} isOpen={isOpenID === 4} menuClick={menuOpen} />
        </ul>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>In progress</h2>
        <ul className={style.list}>
          <TaskCard id={5} isOpen={isOpenID === 5} menuClick={menuOpen} />
        </ul>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>Done</h2>
        <ul className={style.list}>
          <TaskCard id={6} isOpen={isOpenID === 6} menuClick={menuOpen} />
        </ul>
      </div>
    </section>
  );
}
