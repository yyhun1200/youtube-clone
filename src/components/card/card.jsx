import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const { page, etag, videoId, snippet, setPage, setShowData } = { ...props };
  const { title, thumbnails, channelTitle } = { ...snippet };
  const thumbnailSrc = thumbnails.default.url;
  const applyStyle = page === "main" ? styles.main : styles.video;

  const handleClickCard = (e) => {
    const id = typeof videoId == "object" ? videoId.videoId : videoId;
    const data = { etag, id, snippet };
    setShowData(data);
    setPage("video");
  };

  return (
    <div className={`${styles.card} ${applyStyle}`} onClick={handleClickCard}>
      <div className={styles.thumbnail}>
        <img src={thumbnailSrc} alt="thumbnail" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title.toString()}</div>
        <div className={styles.channel}>{channelTitle}</div>
      </div>
    </div>
  );
};

export default Card;
