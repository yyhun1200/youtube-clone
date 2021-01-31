import React from "react";
import styles from "./main.module.css";
import Header from "../header/header";
import List from "../list/list";

const Main = (props) => (
  <div className={styles.main}>
    <Header />
    <List />
  </div>
);

export default Main;
