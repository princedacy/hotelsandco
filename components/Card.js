import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useQuery } from "@tanstack/react-query";
function Card() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["rooms"],
    queryFn: () =>
      fetch("https://63afdf4f649c73f572c415b1.mockapi.io/api/rooms").then(
        (res) => res.json()
      ),
  });
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 pr-20 pl-20">
      {data.map((room) => (
        <div className="card-container container mx-auto relative w-80 h-80 mb-16 cursor-pointer" key={room.id}>
          <div className="card group text-left p-3 mb-5 relative w-full">
            <Image
              className="!w-5 !h-5 absolute !top-5 !right-5 cursor-pointer z-40 !left-auto"
              src={"/icons/heart.svg"}
              alt="add to wishlist"
              style={{ objectFit: "contain", objectPosition: "right" }}
              fill
            />
            <Image
              src={room.image}
              alt=""
              style={{ objectFit: "contain", objectPosition: "center" }}
              fill
              className="!relative rounded-2xl"
            />
            <div className="flex items-center justify-between">
              <h3 className="location-name text-black font-medium py-2">
                {room.location}
              </h3>
              <div className="flex">
                <StarIcon className="h-6" /> <p className="font-light">4.86</p>
              </div>
            </div>
            <h3 className="text-gray-500 font-light">On the lake</h3>
            <p className="py-2 text-sm text-gray-500 font-light">Jan 1 – 6</p>
            <div className="flex">
              <span className="font-regular">${room.price}&nbsp;</span>
              <span className="font-light">night</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
