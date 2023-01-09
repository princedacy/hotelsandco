import React from "react";
import Filter from "./Filter";
import { AdjustmentsIcon } from "@heroicons/react/solid";
function Navbar() {
  return (
    <div>
      <nav className="relative flex gap-2 py-5 md:py-10 px-5 sm:px-20">
        <Filter />
        <div className="items-center space-x-2 border p-2 rounded-xl text-gray-500 cursor-pointer hidden md:flex">
          <AdjustmentsIcon className="h-6" />
          <p>Filters</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
