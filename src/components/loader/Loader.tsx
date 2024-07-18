import styles from "./Loader.module.css";
import LoaderGif from "../../assets/loader.gif";

function Loader() {
  return (
    <div className={styles.loader}>
      <img src={LoaderGif} alt="loader" />
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
