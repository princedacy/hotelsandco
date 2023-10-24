import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "../styles/style.module.css";

function generateRandomImageUrls(count) {
  const baseUrl = "https://picsum.photos/600/400?image=";
  const imageUrls = [];

  for (let i = 1; i <= count; i++) {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    imageUrls.push(`${baseUrl}${randomImageId}`);
  }

  return imageUrls;
}

function RandomImageSwiper() {
  const [randomImageUrls, setRandomImageUrls] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const count = 5;
    const imageUrls = generateRandomImageUrls(count);
    setRandomImageUrls(imageUrls);
  }, []);

  const handleSlideControlClick = (e) => {
    e.stopPropagation();
    
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="swiper-container" id="randomImagesSwiper">
      <div className="swiper-wrapper">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {randomImageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index} className={`h-96 md:h-16 lg:h-32`}>
              <Image
                src={imageUrl}
                alt=""
                style={{ objectFit: "cover", objectPosition: "center" }}
                fill
                className="!relative rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={`swiper-button-prev absolute transform -translate-y-1/2 ${styles["custom-button"]}`}
        style={{ left: "24px" }}
        onClick={handleSlideControlClick}
      ></div>
      <div
        className={`swiper-button-next absolute transform -translate-y-1/2 ${styles["custom-button"]}`}
        style={{ right: "24px" }}
        onClick={handleSlideControlClick}
      ></div>
      <div className={`swiper-pagination ${styles["custom-pagination"]}`}></div>
    </div>
  );
}

export default RandomImageSwiper;
