import MediaPlayer from "../MediaPlayer/MediaPlayer";
import TextZone from "../textzone/TextZone";
import styles from "./MediaText.module.css";

function MediaText({ mediaLink, imageSrc, text, mediaLeft = true }) {
  return (
    <div
      className={styles["day-section"]}
      data-media-left={mediaLeft}
    >

      {mediaLeft ? (
        <>
          <div className={styles["showcase-video"]}>
            {mediaLink ? (
              <MediaPlayer mediaLink={mediaLink} />
            ) : (
                 <img src={process.env.PUBLIC_URL+imageSrc} alt="ImageFallback" className={styles["showcase-image"]} />
            )}
          </div>
          <div className={styles["text-zone"]}>
            <TextZone text={text} />
          </div>
        </>
      ) : (
        <>
          <div className={styles["text-zone"]}>
            <TextZone text={text} />
          </div>
          <div className={styles["showcase-video"]}>
            {mediaLink ? (
              <MediaPlayer mediaLink={mediaLink} />
            ) : (
              <img src={process.env.PUBLIC_URL+imageSrc} alt="ImageFallback" className={styles["showcase-image"]} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MediaText;
