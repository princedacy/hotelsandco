import React from "react";
import Footer from "../components/Footer";
import Topnav from "../components/Topnav";
import { useRouter } from "next/router";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { ShareIcon, HeartIcon} from "@heroicons/react/outline";

function Room() {
  const router = useRouter();
  const { id, location, image, price, rating, description } = router.query;
  return (
    <div>
      <Topnav />
      <div className="grid px-20">
        <h3 className="text-2xl font-normal py-2">{location}</h3>
        <div className="flex justify-between">
          <div className="flex justify-start items-center font-medium text-sm">
            <div className="flex items-center  py-2">
              <StarIcon className="h-4" />
              <p>{rating * 0.5}</p>
            </div>
            <p className="pl-2 before:content-['·']">
              <a href="#" className="pl-2 underline">
                8 reviews
              </a>
            </p>
            <p className="flex items-center pl-2 before:content-['·']">
              <a href="#" className="pl-2 underline">
                Sanderfjold, vestford
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
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-center bg-cover h-72 rounded-3xl cursor-pointer hover:shadow-sm"
        ></div>
        <p>{description}</p>
      </div>
      <div className="px-20 py-10">
        <div className="border-b w-1/3">
          <h3>Hosted by paal</h3>
          <ul className="flex">
            <li>10 guests</li>
            <li className="pl-2 before:content-['·']">6 bedrooms</li>
            <li className="pl-2 before:content-['·']">8 bed</li>
            <li className="pl-2 before:content-['·']">5 baths</li>
          </ul>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Room;
