import React from "react";
import user from "../../images/user.svg";
import styles from "./show.module.css";

const Show = (props) => (
  <div className={styles.show}>
    <section className={styles.videoInfo}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tiZhRDFkJuQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className={styles.videoTitle}>title</div>
      <div className={styles.channel}>
        <img src={user} alt="channel" />
        <a href="">channel</a>
        <button className={styles.subscribe}>subscribe</button>
      </div>
      <div className={styles.videoDescription}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam
        voluptatem dicta officiis ullam ratione amet id, incidunt sed voluptate
        veniam nisi animi tempora quas cum impedit nulla eligendi eum? Ratione
        cumque non ullam nobis quam iusto accusamus quisquam, quis officia magni
        delectus. Adipisci distinctio sequi sunt,
      </div>
    </section>
    
  </div>
);

export default Show;
