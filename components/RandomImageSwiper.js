import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "../styles/style.module.css";

function generateRandomImageUrls(count) {
  // Use of an external images API to have more than one image on room listing card swiper
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
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const count = 5;
    const imageUrls = generateRandomImageUrls(count);
    setRandomImageUrls(imageUrls);
  }, []);

  const handleSlideControlClick = (e) => {
    e.stopPropagation();

    if (swiperRef.current) {
      if (e.currentTarget.classList.contains("swiper-button-prev")) {
        swiperRef.current.slidePrev();
      } else if (e.currentTarget.classList.contains("swiper-button-next")) {
        swiperRef.current.slideNext();
      }
    }
  };

  const handleSlideChange = (swiper) => {
    // Check if there's a previous slide and show the previous button
    setShowPrevButton(swiper.isBeginning);

    // Check if there's a next slide and show the next button
    setShowNextButton(swiper.isEnd);
  };

  return (
    <div
      className="swiper-container"
      id="randomImagesSwiper"
      onMouseEnter={() => {
        // When hovering, show the buttons
        setShowNextButton(true);
        setShowPrevButton(true);
      }}
      onMouseLeave={() => {
        // When not hovering, hide the buttons
        setShowNextButton(false);
        setShowPrevButton(false);
      }}
    >
      <div className="swiper-wrapper">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            handleSlideChange(swiper);
          }}
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
        style={{
          left: "24px",
          visibility: showPrevButton ? "visible" : "hidden",
        }}
        onClick={handleSlideControlClick}
      ></div>
      <div
        className={`swiper-button-next absolute transform -translate-y-1/2 ${styles["custom-button"]}`}
        style={{
          right: "24px",
          visibility: showNextButton ? "visible" : "hidden",
        }}
        onClick={handleSlideControlClick}
      ></div>
      <div className={`swiper-pagination ${styles["custom-pagination"]}`}></div>
    </div>
  );
}

export default RandomImageSwiper;
