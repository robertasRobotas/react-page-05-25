import styles from "./Navbar.module.css";
import burger from "../../assets/burger.png";
import { useState } from "react";

const DesktopMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a href="/">Apie</a>
      </li>
      <li>
        <a href="/estate">Objektai</a>
      </li>
      <li>
        <a href="/contacts">Kontaktai</a>
      </li>
    </ul>
  );
};

const MobileMenu = (props) => {
  return (
    <div
      className={`${styles.mobileMenuWrapper} ${
        props.isMenuOpen ? styles.menuOpen : styles.menuClosed
      } `}
    >
      <ul className={styles.mobileMenu}>
        <li>
          <a href="/">Apie</a>
        </li>
        <li>
          <a href="/estate">Objektai</a>
        </li>
        <li>
          <a href="/contacts">Kontaktai</a>
        </li>
      </ul>
    </div>
  );
};
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.logo}>NT Broker1</h1>
        <DesktopMenu />
        <button
          onClick={() => {
            setMenuOpen((prevState) => !prevState);
          }}
          className={styles.navButton}
        >
          <img className={styles.menuBurger} src={burger} />
        </button>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;
