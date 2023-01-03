import Image from "next/image";
import React from "react";
import { ChevronUpIcon, GlobeAltIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <div className="flex items-center justify-between fixed bottom-0 bg-white shadow-sm border text-sm font-light px-20 py-4 z-50 w-full">
      <div className="flex">
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
      <div className="flex items-center justify-end font-medium">
        <div className="flex items-center">
          <GlobeAltIcon className="h-5 cursor-pointer pr-2" />
          <p className="cursor-pointer hidden md:inline no-underline hover:underline">English(US)</p>
        </div>
        <p className="pl-4">
          <span className="text-md h-5 cursor-pointer p-2">$</span>
          <a href="#" className="no-underline hover:underline">USD</a>
        </p>
        <p className="flex items-center pl-5">
            <a href="#" className="no-underline hover:underline">Support & resources</a>
            <ChevronUpIcon className="pl-2 h-8"/>
        </p>
      </div>
    </div>
  );
}

export default Footer;
