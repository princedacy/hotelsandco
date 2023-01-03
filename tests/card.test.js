import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

test("renders a list of rooms", () => {
  const rooms = [
    {
      number: 44761,
      status: true,
      wifi: false,
      location: "Salem",
      image: "https://loremflickr.com/640/480/city",
      price: "672.00",
      id: "1",
    },
  ];
});
