import styles from "./app.module.css";
import Main from "./components/view/main/main";
import Video from "./components/view/video/video";

function App() {
  return (
    <div className={styles.app}>
      <Video />
    </div>
  );
}

export default App;
