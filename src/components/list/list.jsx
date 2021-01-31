import React from "react";
import Card from "../card/card";
import styles from "./list.module.css";

const List = (props) => (
  <div className={styles.list}>
    <Card></Card>
    <Card></Card>
  </div>
);

export default List;
