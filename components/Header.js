import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import tinyHomes from "../public/icons/tinyhomes.jpeg";
import Filter from "./Filter";

function Header() {
  return (
    <div className="top-0 z-40 bg-white shadow-sm sticky">
      <header className="pr-10 pl-10 pt-5 pb-5 grid grid-cols-3 shadow-sm">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="/Airbnb_logo.png"
            alt="Logo"
            style={{ objectFit: "contain", objectPosition: "left" }}
            fill
          />
        </div>

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="pl-5 bg-transparent outline-none flex-grow"
          />
          <SearchIcon className="h-8 bg-[#ff385c] text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
        </div>
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="cursor-pointer hidden md:inline">Airbnb your home</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </header>
      <nav className="relative">
        <div className="flex whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide p-10">
          <Filter title="Lake" Icon="/icons/lake.jpeg" />
          <Filter title="Amazing pools" Icon="/icons/pools.jpeg" />
          <Filter title="Islands" Icon="/icons/islands.jpeg" />
          <Filter title="Golfing" Icon="/icons/golf.jpeg" />
          <Filter title="OMG!" Icon="/icons/omg.jpeg" />
          <Filter title="Play" Icon="/icons/play.jpeg" />
          <Filter title="Chef's kitchens" Icon="/icons/kitchen.jpeg" />
          <Filter title="Private rooms" Icon="/icons/rooms.jpeg" />
          <Filter title="Mansions" Icon="/icons/mansions.jpeg" />
          <Filter title="Luxe" Icon="/icons/luxe.jpeg" />
          <Filter title="Iconic cities" Icon="/icons/cities.jpeg" />
          <Filter title="Beachfront" Icon="/icons/beach.jpeg" />
          <Filter title="Skiing" Icon="/icons/skiing.jpeg" />
          <Filter title="Amazing views" Icon="/icons/views.jpeg" />
          <Filter title="Farms" Icon="/icons/farms.jpeg" />
          <Filter title="Surfing" Icon="/icons/surfing.jpeg" />
          <Filter title="Tiny homes" Icon="/icons/tinyhomes.jpeg" />
          <Filter title="Trending" Icon="/icons/trending.jpeg" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
