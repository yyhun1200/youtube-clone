import React from "react";
import styles from "./card.module.css";

const Card = (props) => (
  <div className={styles.card}>
    <div className={styles.thumbnail}>
      <img
        src="https://i.ytimg.com/vi/ald6Ma0vEW4/default.jpg"
        alt="thumbnail"
      />
    </div>
    <div className={styles.info}>
      <div className={styles.title}>스타트업 OST (START-UP OST )</div>
      <div className={styles.channel}>Yoona YNA</div>
    </div>
  </div>
);

export default Card;
