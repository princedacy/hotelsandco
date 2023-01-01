import React from "react";
import FilterItem from "./FilterItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
function Filter() {
  return (
    <div className="swiper mySwiper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-wrapper flex whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide p-10 w-4/5">
          <SwiperSlide>
            <FilterItem title="Lake" Icon="/icons/lake.jpeg" />
          </SwiperSlide>

          <SwiperSlide>
            <FilterItem title="Amazing pools" Icon="/icons/pools.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Islands" Icon="/icons/islands.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Golfing" Icon="/icons/golf.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="OMG!" Icon="/icons/omg.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Play" Icon="/icons/play.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Chef's kitchens" Icon="/icons/kitchen.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Private rooms" Icon="/icons/rooms.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Mansions" Icon="/icons/mansions.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Luxe" Icon="/icons/luxe.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Iconic cities" Icon="/icons/cities.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Beachfront" Icon="/icons/beach.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Skiing" Icon="/icons/skiing.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Amazing views" Icon="/icons/views.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Farms" Icon="/icons/farms.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Surfing" Icon="/icons/surfing.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Tiny homes" Icon="/icons/tinyhomes.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <FilterItem title="Trending" Icon="/icons/trending.jpeg" />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swiper-button-prev rounded-full cursor-pointer border !w-8 !h-8 absolute !top-2/3 after:!text-sm !text-black">
        {/* <ChevronLeftIcon /> */}
      </div>
      <div className="swiper-button-next rounded-full cursor-pointer border !w-8 !h-8 absolute !top-2/3 right-12 after:!text-sm !text-black">
        {/* <ChevronRightIcon /> */}
      </div>
    </div>
  );
}

export default Filter;
