import style from "./Stats.module.css";

/* eslint-disable react/prop-types */
export function Detail(props) {
  const { label, value } = props;

  return (
    <div className={style.detail}>
      <span className={style.label}>{label}:</span>
      <span className={style.value}>{value}</span>
    </div>
  );
}
