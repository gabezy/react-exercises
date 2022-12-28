import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <NavLink to="/" end className={styles.navLink}>
          Products
        </NavLink>
        <NavLink to="contact" className={styles.navLink}>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
