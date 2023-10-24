import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ViewGridIcon } from "@heroicons/react/solid";

function generateRandomImageUrls(count) {
  // Use of an external images API to have more than one image on room details photos
  const baseUrl = "https://picsum.photos/600/400?image=";
  const imageUrls = [];

  for (let i = 1; i <= count; i++) {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    imageUrls.push(`${baseUrl}${randomImageId}`);
  }

  return imageUrls;
}

function RandomImageWrapper() {
  const [randomImageUrls, setRandomImageUrls] = useState([]);

  useEffect(() => {
    const count = 5;
    const imageUrls = generateRandomImageUrls(count);
    setRandomImageUrls(imageUrls);
  }, []);

  return (
    <div className="relative">
      <div className="flex rounded-2xl ">
        <div className="w-2/4 pr-2">
          <Image
            src={randomImageUrls[0]}
            alt=""
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            className="!relative mb-2 rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
        <div className="w-2/4">
          <div className="w-full h-1/2 mb-2">
            <div className="flex w-1/2 pr-2">
              <Image
                src={randomImageUrls[1]}
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                fill
                className="!relative pr-2 w-1/2 mb-2"
              />
              <Image
                src={randomImageUrls[2]}
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                fill
                className="!relative rounded-tr-2xl w-1/2 mb-2"
              />
            </div>
          </div>
          <div className="w-full h-1/2">
            <div className="flex w-1/2 pr-2">
              <Image
                src={randomImageUrls[3]}
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                fill
                className="!relative pr-2 w-1/2 mb-2"
              />
              <Image
                src={randomImageUrls[4]}
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                fill
                className="!relative rounded-br-2xl w-1/2 mb-2"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="absolute right-4 bottom-0 p-2 m-8 bg-white border border-black rounded-md flex items-center">
        <ViewGridIcon className="h-4" /> Show all photos
      </button>
    </div>
  );
}

export default RandomImageWrapper;
