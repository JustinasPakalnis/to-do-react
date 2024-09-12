import { TaskCard } from "./TaskCard";
import style from "./Tasks.module.css";

export function Tasks() {
  return (
    <section className={style.taskContent}>
      <div className={style.column}>
        <h2 className={style.title}>Todo</h2>
        <ul className={style.list}>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </ul>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>In progress</h2>
        <ul className={style.list}>
          <TaskCard />
        </ul>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>Done</h2>
        <ul className={style.list}>
          <TaskCard />
        </ul>
      </div>
    </section>
  );
}
