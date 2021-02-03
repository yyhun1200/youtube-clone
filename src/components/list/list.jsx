import React from "react";
import Card from "../card/card";
import styles from "./list.module.css";

const List = (props) => {
  const { page } = { ...props };
  return (
    <div className={styles.list}>
      <div className={styles.container}>
        <Card page={page} />
        <Card page={page} />
        <Card page={page} />
        <Card page={page} />
        <Card page={page} />
        <Card page={page} />
        <Card page={page} />
        <Card page={page} />
        <Card page={page} />
      </div>
    </div>
  );
};

export default List;
