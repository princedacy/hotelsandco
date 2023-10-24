import React from "react";
import FilterItem from "./FilterItem";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
function Filter() {
  return (
    <div className="swiper mySwiper">
      <Swiper
        id="filtersSwiper"
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={10}
        navigation={{
          nextEl: ".filtersSwiper.swiper-button-next",
          prevEl: ".filtersSwiper.swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-wrapper flex whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide p-10 w-full md:w-4/5">
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Lake" Icon="/icons/lake.jpeg" />
          </SwiperSlide>

          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Amazing pools" Icon="https://princedacy.github.io/hotelsandco/icons/pools.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Islands" Icon="https://princedacy.github.io/hotelsandco/icons/islands.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Golfing" Icon="https://princedacy.github.io/hotelsandco/icons/golf.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="OMG!" Icon="https://princedacy.github.io/hotelsandco/icons/omg.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Play" Icon="https://princedacy.github.io/hotelsandco/icons/play.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Chef's kitchens" Icon="https://princedacy.github.io/hotelsandco/icons/kitchen.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Private rooms" Icon="https://princedacy.github.io/hotelsandco/icons/rooms.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Mansions" Icon="https://princedacy.github.io/hotelsandco/icons/mansions.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Luxe" Icon="https://princedacy.github.io/hotelsandco/icons/luxe.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Iconic cities" Icon="https://princedacy.github.io/hotelsandco/icons/cities.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Beachfront" Icon="https://princedacy.github.io/hotelsandco/icons/beach.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Skiing" Icon="https://princedacy.github.io/hotelsandco/icons/skiing.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Amazing views" Icon="https://princedacy.github.io/hotelsandco/icons/views.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Farms" Icon="https://princedacy.github.io/hotelsandco/icons/farms.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Surfing" Icon="https://princedacy.github.io/hotelsandco/icons/surfing.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Tiny homes" Icon="https://princedacy.github.io/hotelsandco/icons/tinyhomes.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Trending" Icon="https://princedacy.github.io/hotelsandco/icons/trending.jpeg" />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="absolute top-0 bg-gradient-to-r from-[white] w-11 h-10 to-white z-10"></div>
      <div className="absolute top-0 bg-gradient-to-l from-[white] w-11 h-10 to-white z-10 right-0"></div>
      <div className="filtersSwiper swiper-button-prev rounded-full cursor-pointer border !w-8 !h-8 absolute !top-2/3 after:!text-sm !text-black"></div>
      <div className="filtersSwiper swiper-button-next rounded-full cursor-pointer border !w-8 !h-8 absolute !top-2/3 right-12 after:!text-sm !text-black"></div>
    </div>
  );
}

export default Filter;
