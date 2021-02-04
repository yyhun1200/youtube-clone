import styles from "./app.module.css";
import Header from "./components/header/header";
import Show from "./components/show/show";
import Main from "./components/view/main/main";
import Video from "./components/view/video/video";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("video");
  return (
    <div className={styles.app}>
      <Video page={page} />
    </div>
  );
}

export default App;
