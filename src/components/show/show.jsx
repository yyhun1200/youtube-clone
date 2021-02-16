import React from "react";
import user from "../../images/user.svg";
import styles from "./show.module.css";

const Show = (props) => {
  const { showData } = { ...props };
  const { snippet, videoId } = { ...showData };
  const { title, channelTitle, description } = { ...snippet };

  const videoURL = "https://www.youtube.com/embed/" + videoId;

  const handleOnClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.show}>
      <section className={styles.videoInfo}>
        <iframe
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.videoTitle}>{title}</div>
        <div className={styles.channel}>
          <img src={user} alt="channel" />
          <a href="" onClick={handleOnClick}>
            {channelTitle}
          </a>
          <button className={styles.subscribe}>subscribe</button>
        </div>
        <div className={styles.videoDescription}>{description}</div>
      </section>
    </div>
  );
};

export default Show;
