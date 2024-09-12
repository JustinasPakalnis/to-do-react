import { Button } from "../button/Button";
import style from "./Form.module.css";

export function Form() {
  return (
    <div className={style.lightbox} data-visible="false">
      <div className={style.background}></div>
      <form className={style.formCreate}>
        <fieldset className={style.formRow}>
          <label className={style.label} htmlFor="task">
            Task
          </label>
          <input className={style.input} id="task" type="text" required />
        </fieldset>
        <div className={style.columns}>
          <fieldset className={style.formRow}>
            <label className={style.label} htmlFor="deadline">
              Deadline
            </label>
            <input
              className={style.input}
              id="deadline"
              type="date"
              value="2024-09-03"
              min="2024-09-03"
              max="2025-09-03"
              required
            />
          </fieldset>
          <fieldset className={style.formRow}>
            <label className={style.label} htmlFor="color">
              Color
            </label>
            <input className={style.input} id="color" type="color" required />
          </fieldset>
        </div>
        <fieldset className={style.formRow + " " + style.columns}>
          <Button text="Reset" type="reset" size="small" />
          <Button text="Create" type="submit" size="small" />
        </fieldset>
        <div className={style.close}>x</div>
      </form>
    </div>
  );
}
