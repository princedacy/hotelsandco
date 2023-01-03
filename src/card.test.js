import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Card from "../components/Card";
import mockFetch from "./mocks/mockFetch";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});
afterEach(() => {
  jest.restoreAllMocks();
});
test("renders a list of rooms", async() => {
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));
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
    expect(rooms)
  });
  
