import styles from "./SectionDivider.module.css"


function SectionDivider({ sectionName, logo }) {
    return (
        <div className={styles["section-divider-wrapper"]}>
        <div className={styles["section-divider-line"]}>
            {logo}
            <h2 className={styles["section-title"]}>{sectionName}</h2>
            <hr className={styles["section-divider"]} />
        </div>
        </div>
    );
}
export default SectionDivider;