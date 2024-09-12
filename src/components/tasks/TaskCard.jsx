import style from "./TaskCard.module.css";

export function TaskCard() {
  return (
    <li className={style.task}>
      <div className={style.header}>
        <div className={style.more}>...</div>
        <div className={style.moreActions} data-visible="false">
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
        <p>Uzduoties tekstas</p>
      </div>
      <div className={style.footer}>
        <p>Deadline: 2024-09-04</p>
      </div>
    </li>
  );
}
