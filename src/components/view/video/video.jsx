import React from "react";
import Header from "../../header/header";
import List from "../../list/list";
import Show from "../../show/show";
import styles from "./video.module.css";

const Video = (props) => {
  const { youtube, data, setData, page, setPage, showData, setShowData } = {
    ...props,
  };
  return (
    <div className={styles.video}>
      <Header youtube={youtube} setData={setData} setPage={setPage} />
      <section className={styles.layout}>
        <div className={styles.show}>
          <Show showData={showData} />
        </div>
        <div className={styles.list}>
          <List
            data={data}
            page={page}
            setPage={setPage}
            setShowData={setShowData}
          />
        </div>
      </section>
    </div>
  );
};

export default Video;
