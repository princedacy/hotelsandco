import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useInfiniteQuery } from "@tanstack/react-query";
import RandomImageSwiper from './RandomImageSwiper';


const API_URL = "https://63afdf4f649c73f572c415b1.mockapi.io/api/rooms";

function fetchRooms({ pageParam = 1 }) {
  return fetch(`${API_URL}?page=${pageParam}&limit=12`).then((response) =>
    response.json()
  );
}

function Card({ router }) {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, error } =
    useInfiniteQuery(["rooms"], fetchRooms, {
      getNextPageParam: (lastPage) => {
        if (lastPage.length === 0) return null;
        return lastPage[lastPage.length - 1].id;
      },
    });

  const roomListRef = useRef();
  const [loadedPages, setLoadedPages] = useState(1);

  const openRoom = async (room) => {
    await router.push({
      pathname: "/room",
      query: {
        id: room.id,
        location: room.location,
        image: room.image,
        price: room.price,
        rating: room.rating,
        description: room.description,
        reviews: room.reviews,
        guests: room.guests,
        bedrooms: room.bedrooms,
        baths: room.baths,
        beds: room.beds,
        host_image: room.host_image,
        host_name: room.host_name,
        city: room.city,
      },
    });
  };

  useEffect(() => {
    const roomList = roomListRef.current;
    if (roomList) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isFetching && hasNextPage) {
            setLoadedPages(loadedPages + 1);
            fetchNextPage();
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );
      observer.observe(roomList);

      return () => {
        observer.disconnect();
      };
    }
  }, [isFetching, hasNextPage]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div
      className="px-5 md:px-20 mx-auto room-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
      ref={roomListRef}
      style={{ overflowY: "scroll" }}
    >
      {data.pages.slice(0, loadedPages).map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((room) => (
            <div
              className="card-container container mx-auto relative w-full mb-16 cursor-pointer sm:w-full sm:mb-4"
              key={room.id}
            >
              <div
                className="card group text-left p-3 mb-5 relative w-full"

                onClick={() => openRoom(room)}
              >
                <Image
                  className="!w-5 !h-5 absolute !top-5 !right-5 cursor-pointer z-40 !left-auto"
                  src={"https://princedacy.github.io/hotelsandco/icons/heart.svg"}
                  alt="add to wishlist"
                  style={{ objectFit: "contain", objectPosition: "right" }}
                  fill
                />
                <RandomImageSwiper />
                <div className="flex items-center justify-between">
                  <h3 className="location-name text-black font-medium py-2">
                    {room.location}
                  </h3>
                  <div className="flex items-center">
                    {room.rating * 0.5 >= 3 ? (
                      <>
                        <StarIcon className="h-4" />
                        <p className="font-light text-sm">
                          {room.rating * 0.5}
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <h3 className="text-gray-500 font-light">{room.city}</h3>
                <p className="py-2 text-sm text-gray-500 font-light">
                  Oct 22 – 23
                </p>
                <div className="flex">
                  <span className="font-regular">${Number(room.price).toFixed(0)}&nbsp;</span>
                  <span className="font-light">night</span>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Card;
