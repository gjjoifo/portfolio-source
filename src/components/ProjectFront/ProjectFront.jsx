import Info from "../info/Info";
import BackgroundCard from "../backgroundCard/BackgroundCard";
import MediaPlayer from "../MediaPlayer/MediaPlayer";

import ReactMarkdown from "react-markdown";

import styles from "./ProjectFront.module.css";

function ProjectFront({ title, role, engineName, timeFrame, descriptionSection, mediaLink, imageSrc }) {
    return (
        <div className={styles.projectFront}>
            <div className={styles.topSection}>
                <div className={styles.videoSection}>
                    {mediaLink ? (
                        <MediaPlayer mediaLink={mediaLink} />
                    ) : (
                        <img
                            src={process.env.PUBLIC_URL + imageSrc}
                            alt="ImageFallback"
                            className={styles.showcaseImage}
                        />
                    )}
                </div>

                <div className={styles.infoSection}>
                    <Info
                        title={title}
                        role={role}
                        engineName={engineName}
                        timeFrame={timeFrame}
                    />
                </div>
            </div>

            <div className={styles.descriptionSection}>
                <BackgroundCard>
                    <ReactMarkdown>{descriptionSection}</ReactMarkdown>
                </BackgroundCard>
            </div>
        </div>
    );
}

export default ProjectFront;

