import React from "react";
import Card from "../card/card";
import styles from "./list.module.css";

const List = (props) => (
  <div className={styles.list}>
    <div className={styles.container}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
);

export default List;
