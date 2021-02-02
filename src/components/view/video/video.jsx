import React from "react";
import Card from "../../card/card";
import Header from "../../header/header";
import List from "../../list/list";
import Show from "../../show/show";
import styles from "./video.module.css";

const Video = (props) => (
  <div className={styles.video}>
    <Header />
    <section className={styles.layout}>
      <div className={styles.show}>
        <Show />
      </div>
      <div className={styles.list}>
        <List />
      </div>
    </section>
  </div>
);

export default Video;
