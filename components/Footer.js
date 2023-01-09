import Image from "next/image";
import React from "react";
import {
  ChevronUpIcon,
  GlobeAltIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <div className="flex items-center justify-between fixed bottom-0 bg-white shadow-sm border text-sm font-light px-20 py-4 z-50 w-full">
      <div className="hidden lg:flex">
        <span>© 2023 Airbnb, Inc.</span>
        <ul className="flex">
          <li className="before:content-['·'] px-2">
            <a href="#" className="pl-2 no-underline hover:underline">
              Terms
            </a>
          </li>
          <li className="before:content-['·'] px-2">
            <a href="#" className="pl-2 no-underline hover:underline">
              Sitemap
            </a>
          </li>
          <li className="before:content-['·'] px-2">
            <a href="#" className="pl-2 no-underline hover:underline">
              Privacy
            </a>
          </li>
          <li className="before:content-['·'] px-2">
            <a href="#" className="pl-2 no-underline hover:underline">
              Your privacy choices
              {/* <Image src={"/icons/privacy.svg"} fill alt="privacy choices" /> */}
            </a>
          </li>
          <li className="before:content-['·'] px-2">
            <a href="#" className="pl-2 no-underline hover:underline">
              Destinations
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center justify-end font-medium">
        <div className="flex items-center">
          <GlobeAltIcon className="h-5 cursor-pointer pr-2" />
          <p className="cursor-pointer hidden md:inline no-underline hover:underline">
            English(US)
          </p>
        </div>
        <p className="pl-4">
          <span className="text-md h-5 cursor-pointer p-2">$</span>
          <a href="#" className="no-underline hover:underline">
            USD
          </a>
        </p>
        <p className="flex items-center pl-5">
          <a href="#" className="no-underline hover:underline">
            Support & resources
          </a>
          <ChevronUpIcon className="pl-2 h-8" />
        </p>
      </div>
      <div className="flex items-center justify-between mx-auto lg:hidden w-full">
        <div className="flex flex-col items-center w-1/3">
          <SearchIcon className="h-7 text-[#ff385c] mx-auto" />
          <h6 className="text-xs font-medium">Explore</h6>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <HeartIcon className="h-7 text-gray-500 mx-auto" />
          <h6 className="text-xs text-gray-500 font-medium">Wishlists</h6>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <UserCircleIcon className="h-7 text-gray-500 mx-auto" />
          <h6 className="text-xs text-gray-500 font-medium">Log in</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
