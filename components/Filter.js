import React from "react";
import FilterItem from "./FilterItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
function Filter() {
  return (
    <div className="swiper mySwiper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-wrapper flex whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide p-10 w-full md:w-4/5">
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Lake" Icon="/icons/lake.jpeg" />
          </SwiperSlide>

          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Amazing pools" Icon="/icons/pools.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Islands" Icon="/icons/islands.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Golfing" Icon="/icons/golf.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="OMG!" Icon="/icons/omg.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Play" Icon="/icons/play.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Chef's kitchens" Icon="/icons/kitchen.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Private rooms" Icon="/icons/rooms.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Mansions" Icon="/icons/mansions.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Luxe" Icon="/icons/luxe.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Iconic cities" Icon="/icons/cities.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Beachfront" Icon="/icons/beach.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Skiing" Icon="/icons/skiing.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Amazing views" Icon="/icons/views.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Farms" Icon="/icons/farms.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Surfing" Icon="/icons/surfing.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Tiny homes" Icon="/icons/tinyhomes.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit px-5">
            <FilterItem title="Trending" Icon="/icons/trending.jpeg" />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="absolute top-0 bg-gradient-to-r from-[white] w-11 h-10 to-white z-10"></div>
      <div className="absolute top-0 bg-gradient-to-l from-[white] w-11 h-10 to-white z-10 right-0"></div>
      <div className="swiper-button-prev rounded-full cursor-pointer border !w-8 !h-8 absolute !top-2/3 after:!text-sm !text-black"></div>
      <div className="swiper-button-next rounded-full cursor-pointer border !w-8 !h-8 absolute !top-2/3 right-12 after:!text-sm !text-black"></div>
    </div>
  );
}

export default Filter;
