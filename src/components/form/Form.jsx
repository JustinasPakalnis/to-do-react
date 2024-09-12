import { Button } from "../button/Button";
import style from "./Form.module.css";
import React, { useState } from "react";
export function Form() {
  let [lightboxON, setlightboxON] = useState("false");

  function handleLightboxON() {
    setlightboxON((lightboxON = "true"));
  }
  function handleLightboxOFF() {
    setlightboxON((lightboxON = "false"));
  }

  return (
    <>
      <button onClick={handleLightboxON}>Click Me</button>
      <div className={style.lightbox} data-visible={lightboxON}>
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
          <div onClick={handleLightboxOFF} className={style.close}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="200px"
              width="200px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
            </svg>
          </div>
        </form>
      </div>
    </>
  );
}
