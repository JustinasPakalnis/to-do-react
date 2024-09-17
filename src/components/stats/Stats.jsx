import { Detail } from "./Detail";
import style from "./Stats.module.css";

export function Stats() {
  return (
    <div className={style.stats}>
      <Detail label="Viso" value={0} />
      <Detail label="Todo" value={0} />
      <Detail label="In-progress" value={0} />
      <Detail label="Done" value={0} />
      <Detail label="Deleted" value={0} />
    </div>
  );
}
