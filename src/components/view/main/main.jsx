import React from "react";
import styles from "./main.module.css";
import Header from "../../header/header";
import List from "../../list/list";

const Main = (props) => {
  const { youtube, data, setData, page, setPage, setShowData } = { ...props };

  return (
    <div className={styles.main}>
      <Header youtube={youtube} setData={setData} setPage={setPage} />
      <div className={styles.list}>
        <List
          data={data}
          page={page}
          setPage={setPage}
          setShowData={setShowData}
        />
      </div>
    </div>
  );
};

export default Main;
