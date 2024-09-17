import style from "./Footer.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Footer() {
  const { updateOptionsMenuStatus } = useContext(GlobalContext);
  return (
    <footer
      onClick={() => updateOptionsMenuStatus(-1)}
      className={style.mainFooter}
    >
      <p>Copyleft &copy;</p> <p>Allrights reversed &reg;</p>
    </footer>
  );
}
