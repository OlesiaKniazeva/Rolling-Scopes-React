import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/search" className={styles.logo}>
        StorySearch
      </NavLink>
      <h1 className={styles.title}>Find the book you love</h1>
    </header>
  );
}

export default Header;
