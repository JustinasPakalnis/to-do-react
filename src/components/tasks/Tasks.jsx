import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import style from "./Tasks.module.css";
import { GlobalContext } from "../../context/GlobalContext";

export function Tasks() {
  const { tasks } = useContext(GlobalContext);
  return (
    <section className={style.taskContent}>
      <div className={style.column}>
        <h2 className={style.title}>Todo</h2>
        <ul className={style.list}>
          {tasks
            .filter((task) => task.status === "todo")
            .map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </ul>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>In progress</h2>
        <ul className={style.list}>
          {tasks
            .filter((task) => task.status === "in-progress")
            .map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </ul>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>Done</h2>
        <ul className={style.list}>
          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </ul>
      </div>
    </section>
  );
}
