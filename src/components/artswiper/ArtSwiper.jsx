import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ArtSwiper.module.css";
import MediaPlayer from "../MediaPlayer/MediaPlayer";

function ArtSwiper({ videos = null, images = [], slidesPerView = 3, loop = false}) {
  return (
    <div className="py-6 px-4">
      <Swiper
        spaceBetween={30}
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        slidesPerView={slidesPerView}
        loop={loop}
      >
        {videos
          ? videos.map((videoSrc, index) => (
              <SwiperSlide key={index}>
                <div className={styles["image-slide-wrapper"]}>
                  <MediaPlayer
                    mediaLink={videoSrc}
                    className={styles["custom-swiper-image"]}
                  />
                </div>
              </SwiperSlide>
            ))
          : images.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className={styles["image-slide-wrapper"]}>
                  <img
                    src={process.env.PUBLIC_URL + imgSrc}
                    alt={`slide-${index}`}
                    className={styles["custom-swiper-image"]}
                  />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}

export default ArtSwiper;
