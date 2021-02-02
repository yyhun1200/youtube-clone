import React, { useState } from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const [page, setPage] = useState("video");
  const applyStyle = page === "main" ? styles.main : styles.default;
  return (
    <div className={`${styles.card} ${applyStyle}`}>
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
};

export default Card;
