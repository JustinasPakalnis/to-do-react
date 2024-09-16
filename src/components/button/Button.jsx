/* eslint-disable react/prop-types */
import style from "./Button.module.css";

export function Button({ text, icon, type, size, onClick }) {
  const iconElement = !icon ? null : <span className={style.icon}>{icon}</span>;

  let classes = style.btn;

  if (size === "small") {
    classes += " " + style.small;
  }
  if (size === "big") {
    classes += " " + style.big;
  }

  return (
    <button type={type ?? "button"} className={classes} onClick={onClick}>
      {iconElement}
      <span className={style.text}>{text}</span>
    </button>
  );
}
