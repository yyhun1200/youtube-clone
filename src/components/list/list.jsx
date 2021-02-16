import React from "react";
import Card from "../card/card";
import styles from "./list.module.css";

const List = (props) => {
  const { data, page, setPage, setShowData } = { ...props };
  return (
    <div className={styles.list}>
      <div className={styles.container}>
        {data.map((item) => {
          const key = item.etag;
          const snippet = item.snippet;
          const videoId = item.id;
          return (
            <Card
              key={key}
              page={page}
              videoId={videoId}
              snippet={snippet}
              setPage={setPage}
              setShowData={setShowData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
