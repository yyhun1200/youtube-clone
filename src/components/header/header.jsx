import React, { useRef } from "react";
import styles from "./header.module.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";

const Header = (props) => {
  const { setData, setPage, youtube } = { ...props };
  const inputRef = useRef();

  const clickLogo = (e) => {
    e.preventDefault();
    setPage("main");
    youtube.getMostPopular(setData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const qurry = inputRef.current.value;
    youtube.getSearch(setData, qurry);
    setPage("main");
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a href="/#" className={styles.logoGroup} onClick={clickLogo}>
          <img src={logo} alt="logo" />
          <span>Devtube</span>
        </a>
        <form className={styles.searchBar} onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" />
          <button>
            <img src={search} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
