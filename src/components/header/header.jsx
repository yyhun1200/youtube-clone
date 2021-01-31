import React from "react";
import styles from "./header.module.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";

const Header = (props) => (
  <div className={styles.header}>
    <div className={styles.container}>
      <a href="#" className={styles.logoGroup}>
        <img src={logo} alt="logo" />
        <span>Devtube</span>
      </a>
      <form className={styles.searchBar}>
        <input type="text" />
        <button>
          <img src={search} alt="search" />
        </button>
      </form>
    </div>
  </div>
);

export default Header;
