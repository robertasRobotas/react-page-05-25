import styles from "./Navbar.module.css";
import burger from "../../assets/burger.png";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>NT Broker1</h1>
      <ul className={styles.menu}>
        <li>
          <a href="">Apie</a>
        </li>
        <li>
          <a href="">Objektai</a>
        </li>
        <li>
          <a href="">Kontaktai</a>
        </li>
      </ul>
      <button className={styles.navButton}>
        <img className={styles.menuBurger} src={burger} />
      </button>
    </div>
  );
};

export default Navbar;
