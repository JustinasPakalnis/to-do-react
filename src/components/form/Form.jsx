import { useState } from "react";
import { Button } from "../button/Button";
import style from "./Form.module.css";

export function Form({ lightboxVisible, addTask }) {
  const defaultText = "";
  const defaultDeadline = "2024-09-10";
  const defaultColor = "#ff0000";
  const [text, setText] = useState(defaultText);
  const [deadline, setDeadline] = useState(defaultDeadline);
  const [color, setColor] = useState(defaultColor);

  function handleTextChange(e) {
    setText(e.target.value);
  }
  function handleDeadlineChange(e) {
    setDeadline(e.target.value);
  }
  function handleColorChange(e) {
    setColor(e.target.value);
  }
  function handleReset() {
    setText(defaultText);
    setDeadline(defaultDeadline);
    setColor(defaultColor);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    addTask(task, deadline, color);
  }
  return (
    <>
      <div className={style.lightbox} data-visible={lightboxVisible}>
        <div className={style.background}></div>
        <form onSubmit={handleFormSubmit} className={style.formCreate}>
          <fieldset className={style.formRow}>
            <label className={style.label} htmlFor="task">
              Task
            </label>
            <input
              value={text}
              onChange={handleTextChange}
              className={style.input}
              id="task"
              type="text"
              required
            />
          </fieldset>
          <div className={style.columns}>
            <fieldset className={style.formRow}>
              <label className={style.label} htmlFor="deadline">
                Deadline
              </label>
              <input
                value={deadline}
                onChange={handleDeadlineChange}
                className={style.input}
                id="deadline"
                type="date"
                min="2024-09-03"
                max="2025-09-03"
                required
              />
            </fieldset>
            <fieldset className={style.formRow}>
              <label className={style.label} htmlFor="color">
                Color
              </label>
              <input
                value={color}
                onChange={handleColorChange}
                className={style.input}
                id="color"
                type="color"
                required
              />
            </fieldset>
          </div>
          <fieldset className={style.formRow + " " + style.columns}>
            <Button
              text="Reset"
              type="reset"
              size="small"
              onClick={handleReset}
            />
            <Button text="Create" type="submit" size="small" />
          </fieldset>
          <div className={style.close}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="200px"
              width="200px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
            </svg>
          </div>
        </form>
      </div>
    </>
  );
}
