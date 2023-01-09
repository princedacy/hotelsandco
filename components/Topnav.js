import React from "react";
import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
function Topnav() {
    const router = useRouter()
  return (
    <div>
      <header className="px-5 md:px-20 py-5 grid grid-cols-3 shadow-sm">
        <div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={()=> router.push('/')}>
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
          <div className="flex items-center space-x-2 border p-2 rounded-full cursor-pointer">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Topnav;
