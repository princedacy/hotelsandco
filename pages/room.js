import React from "react";
import Footer from "../components/Footer";
import Topnav from "../components/Topnav";
import { useRouter } from "next/router";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { ShareIcon, HeartIcon, HomeIcon, ArrowCircleDownIcon, PuzzleIcon } from "@heroicons/react/outline";
import RandomImageWrapper from "../components/RandomImageWrapper";

function Room() {
  const router = useRouter();
  const {
    id,
    location,
    image,
    price,
    rating,
    description,
    reviews,
    guests,
    bedrooms,
    beds,
    baths,
    host_image,
    host_name,
    city
  } = router.query;
  return (
    <div>
      <Topnav />
      <div className="grid px-20">
        <h3 className="text-2xl font-semibold py-2">{location}</h3>
        <div className="flex justify-between">
          <div className="flex justify-start items-center font-medium text-sm">
            <div className="flex items-center  py-2">
              <StarIcon className="h-4" />
              <p>{rating * 0.5}</p>
            </div>
            <p className="pl-2 before:content-['·']">
              <a href="#" className="pl-2 underline">
                {reviews} reviews
              </a>
            </p>
            <p className="flex items-center pl-2 before:content-['·']">
              <a href="#" className="pl-2 underline">
                {city}
              </a>
            </p>
          </div>
          <div className="flex items-center font-medium text-sm">
            <div className="flex pl-2 items-center">
              <ShareIcon className="h-4" />
              <a href="#" className="pl-2 underline">
                Share
              </a>
            </div>
            <div className="flex items-center pl-2">
              <HeartIcon className="h-4" />
              <a href="#" className="pl-2 underline">
                Save
              </a>
            </div>
          </div>
        </div>
        <RandomImageWrapper/>
        <p className="pt-10 w-1/2">{description}</p>
      </div>
      <div className="px-20 py-10">
        <div className="border-b w-1/2 py-5 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Hosted by {host_name}</h3>
            <ul className="flex">
              <li className="font-light">{guests} guests</li>
              <li className="pl-2 before:content-['·'] before:pr-2 font-light">
                {bedrooms} bedrooms
              </li>
              <li className="pl-2 before:content-['·'] before:pr-2  font-light">
                {beds} bed
              </li>
              <li className="pl-2 before:content-['·'] before:pr-2  font-light">
                {baths} baths
              </li>
            </ul>
          </div>
          <Image
            src={host_image}
            alt={host_name}
            fill
            className="!w-10 !h-10 rounded-full !relative"
          />
        </div>
        <div className="py-5">
          <div className="flex py-4">
            <HomeIcon className="h-7" />
            <div className="relative pl-2">
              <p className="text-md font-normal">Dedicated workspace</p>
              <p className="text-sm font-light text-gray-500">
                A private room with wifi that’s well-suited for working.
              </p>
            </div>
          </div>
          <div className="flex py-4">
            <ArrowCircleDownIcon className="h-7" />
            <div className="relative pl-2">
              <p className="text-md font-normal">Self check-in</p>
              <p className="text-sm font-light text-gray-500">
                Check yourself in with the lockbox.
              </p>
            </div>
          </div>
          <div className="flex pt-4 pb-10">
            <PuzzleIcon className="h-7" />
            <div className="relative pl-2">
              <p className="text-md font-normal">Furry friends welcome</p>
              <p className="text-sm font-light text-gray-500">
                Bring your pets along for the stay.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-full right-20 border w-1/4 h-40 rounded-2xl shadow-lg p-5">
        <div className="flex items-center justify-between font-medium text-sm">
          <div className="flex">
            <span className="font-regular">${price}&nbsp;</span>
            <span className="font-light">night</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center  py-2">
              <StarIcon className="h-4" />
              <p>{rating * 0.5}</p>
            </div>
            <p className="pl-2 before:content-['·']">
              <a href="#" className="pl-2 underline">
                {reviews} reviews
              </a>
            </p>
          </div>
        </div>
        <button className="bg-[#ff385c] text-white w-full h-12 rounded-md">
          Reserve
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Room;
