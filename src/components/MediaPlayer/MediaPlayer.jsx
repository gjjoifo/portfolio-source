import styles from "./MediaPlayer.module.css";

function MediaPlayer({ mediaLink }) {
    return (
        <div className={styles.mediaContainer}>
            <video
                className={styles.videoPlayer}
                src={process.env.PUBLIC_URL + mediaLink}
                autoPlay
                muted
                controls
                loop
            />
        </div>
    );
}

export default MediaPlayer;
