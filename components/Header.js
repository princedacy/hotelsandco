import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  AdjustmentsIcon,
} from "@heroicons/react/solid";
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
          <div className="flex items-center space-x-2 border p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </header>
      <nav className="relative flex gap-2 p-10">
        <Filter />
        <div className="flex items-center space-x-2 border p-2 rounded-xl text-gray-500">
          <AdjustmentsIcon className="h-6" />
          <p>Filters</p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
