import styles from "./BackgroundCard.module.css";


function BackgroundCard({ children }) {
  return <div className={styles.infoCard}>{children}</div>;
}

export default BackgroundCard;
