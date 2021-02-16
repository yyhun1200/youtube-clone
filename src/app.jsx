import styles from "./app.module.css";
import Header from "./components/header/header";
import Show from "./components/show/show";
import Main from "./components/view/main/main";
import mostpopular from "./mostpopular.json";
import Video from "./components/view/video/video";
import React, { useEffect, useState } from "react";

function App(props) {
  const { youtube } = { ...props };
  const [data, setData] = useState([]);
  const [page, setPage] = useState("main");
  const [showData, setShowData] = useState("");

  useEffect(() => {
    const jsonItem = mostpopular.items;
    setData(jsonItem);
    // youtube.getMostPopular(setData);
  }, []);

  if (page === "main") {
    return (
      <Main
        data={data}
        page={page}
        setPage={setPage}
        setShowData={setShowData}
      />
    );
  } else {
    return (
      <Video
        data={data}
        page={page}
        setPage={setPage}
        showData={showData}
        setShowData={setShowData}
      />
    );
  }
}

export default App;
