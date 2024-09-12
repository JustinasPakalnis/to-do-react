import logo from "../../assets/logo.png";
import headerStyle from "./Header.module.css";
import buttonStyle from "./Button.module.css";

export function Header() {
  return (
    <header className={headerStyle.mainHeader}>
      <img className={headerStyle.logo} src={logo} alt="Logo" />
      <div className={headerStyle.stats}>
        <div className={headerStyle.detail}>
          <span className={headerStyle.label}>Viso:</span>
          <span className={headerStyle.value}>0</span>
        </div>
        <div className={headerStyle.detail}>
          <span className={headerStyle.label}>Todo:</span>
          <span className={headerStyle.value}>0</span>
        </div>
        <div className={headerStyle.detail}>
          <span className={headerStyle.label}>In-progress:</span>
          <span className={headerStyle.value}>0</span>
        </div>
        <div className={headerStyle.detail}>
          <span className={headerStyle.label}>Done:</span>
          <span className={headerStyle.value}>0</span>
        </div>
        <div className={headerStyle.detail}>
          <span className={headerStyle.label}>Deleted:</span>
          <span className={headerStyle.value}>0</span>
        </div>
      </div>
      <button className={buttonStyle.btn}>
        <span className={buttonStyle.icon}>+</span>
        <span className={buttonStyle.text}>New task</span>
      </button>
    </header>
  );
}
