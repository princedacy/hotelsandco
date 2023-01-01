import React from "react";
import Image from "next/image";
function FilterItem({ Icon, title }) {
  return (
    <div>
      <div className="flex flex-col items-center cursor-pointer relative">
        <Image
          src={Icon}
          alt={title}
          width={24}
          height={24}
          className="opacity-50"
        />
        <p className="text-xs text-gray-500">{title}</p>
      </div>
    </div>
  );
}

export default FilterItem;
