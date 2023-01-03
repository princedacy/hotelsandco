import React from "react";
import Filter from "./Filter";
import { AdjustmentsIcon } from "@heroicons/react/solid";
function Navbar() {
  return (
    <div>
      <nav className="relative flex gap-2 py-10 px-20">
        <Filter />
        <div className="flex items-center space-x-2 border p-2 rounded-xl text-gray-500 cursor-pointer">
          <AdjustmentsIcon className="h-6" />
          <p>Filters</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
