import { useState, useEffect } from "react";
import { TaskCard } from "./TaskCard";
import style from "./Tasks.module.css";

export function Tasks({ task, showOptionsMenu, cardMenuVisibleById }) {
  return (
    <section className={style.taskContent}>
      <div className={style.column}>
        <h2 className={style.title}>Todo</h2>
        <ul className={style.list}>
          {task.map((task) => (
            <TaskCard
              id={1}
              showOptionsMenu={showOptionsMenu}
              cardMenuVisibleById={cardMenuVisibleById}
            />
          ))}
        </ul>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>In progress</h2>
        <ul className={style.list}></ul>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>Done</h2>
        <ul className={style.list}></ul>
      </div>
    </section>
  );
}
