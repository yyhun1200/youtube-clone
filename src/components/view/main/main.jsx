import React from "react";
import styles from "./main.module.css";
import Header from "../../header/header";
import List from "../../list/list";

const Main = (props) => {
  const { page } = { ...props };
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.list}>
        <List page={page} />
      </div>
    </div>
  );
};

export default Main;
