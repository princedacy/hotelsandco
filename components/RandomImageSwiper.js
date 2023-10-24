import React, { useEffect, useState } from "react";
import Image from "next/image";
import SwiperCore, { Swiper, Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "../styles/style.module.css";

SwiperCore.use([Navigation, Pagination]);

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

  useEffect(() => {
    const count = 5; // Adjust the count as needed
    const imageUrls = generateRandomImageUrls(count);
    setRandomImageUrls(imageUrls);
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      effect: "slide",
      speed: "500",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      on: {
        slideChange: () => {
            const prevButton = document.querySelector('.swiper-button-prev');
            const nextButton = document.querySelector('.swiper-button-next');
            if (swiper.isBeginning) {
              prevButton.style.display = 'none';
            } else {
              prevButton.style.display = 'block';
            }
            if (swiper.isEnd) {
              nextButton.style.display = 'none';
            } else {
              nextButton.style.display = 'block';
            }  
        }
      }
    });
  }, []);

  return (
    <div className="swiper-container mySwiper">
      <div className="swiper-wrapper">
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
      </div>
      <div
        className={`swiper-button-prev absolute transform -translate-y-1/2 ${styles["custom-button"]}`}
        style={{ left: "24px" }}
      ></div>
      <div
        className={`swiper-button-next absolute transform -translate-y-1/2 ${styles["custom-button"]}`}
        style={{ right: "24px" }}
      ></div>
      <div className={`swiper-pagination ${styles["custom-pagination"]}`}></div>
    </div>
  );
}

export default RandomImageSwiper;
