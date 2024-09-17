import style from "./TaskCard.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function TaskCard({ task }) {
  const { optionsMenuOpen, updateOptionsMenuStatus } =
    useContext(GlobalContext);
  function handleOptionsMenuClick(event) {
    event.stopPropagation();
    updateOptionsMenuStatus(task.id);
  }

  return (
    <li className={style.task}>
      <div className={style.header}>
        <div
          role="button"
          onClick={handleOptionsMenuClick}
          className={style.more}
        >
          ...
        </div>
        <div
          className={style.moreActions}
          data-visible={task.id === optionsMenuOpen}
        >
          <button className={style.button} type="button">
            Move up
          </button>
          <button className={style.button} type="button">
            Move down
          </button>
          <hr />
          <button className={style.button} type="button">
            In progress
          </button>
          <button className={style.button} type="button">
            Done
          </button>
          <hr />
          <button className={style.button} type="button">
            Delete
          </button>
        </div>
      </div>
      <div className={style.content}>
        <p>{task.text}</p>
      </div>
      <div className={style.footer}>
        <p>Deadline: {task.deadline}</p>
      </div>
    </li>
  );
}
