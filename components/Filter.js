import React from "react";
import Image from "next/image";
function Filter({ Icon, title }) {
  return (
    <div>
      <div className="cursor-pointer relative">
        <Image
          src={Icon}
          alt={title}
          width={24}
          height={24}
          className="opacity-50"
        />
        <p className="text-xs text-gray-500">{title}</p>
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#f6f6f6] to-[#ffffff30] h-28 w-1/12"></div>
    </div>
  );
}

export default Filter;
