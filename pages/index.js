import Laypout from "../components/Laypout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Laypout>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </Laypout>
  );
}
