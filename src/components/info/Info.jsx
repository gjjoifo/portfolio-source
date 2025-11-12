import BackgroundCard from "../backgroundCard/BackgroundCard";
import { LogoPerson, LogoTools, LogoClock } from "../../art/icons/Logo";
import styles from "./Info.module.css";

function Info({ title, role, timeFrame, engineName }) {
  return (
    <BackgroundCard>
      <h1 className={styles.infoCardTitle}>{title}</h1>
      <p className={styles.infoRow}>
        <LogoPerson className={styles.logo}/> {role}
      </p>
      <p className={styles.infoRow}>
        <LogoTools className={styles.logo}/> {engineName}
      </p>
      <p className={styles.infoRow}>
        <LogoClock className={styles.logo}/> {timeFrame}
      </p>
    </BackgroundCard>
  );
}

export default Info;
