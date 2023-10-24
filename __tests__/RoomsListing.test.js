import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoomsService from "../services/RoomsService";

const API_URL = "https://63afdf4f649c73f572c415b1.mockapi.io/api/rooms";

const mockData = [
  {
    id: "1",
    name: "Location 1",
  },
];

const queryClient = new QueryClient();

describe("fetchRooms", () => {
  it("renders rooms fetched from the API", async () => {
    render(
      <QueryClientProvider client={queryClient}>{null}</QueryClientProvider>
    );

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const page = 1;
    const roomsList = await RoomsService.fetchRooms(page);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}?limit=12&page=${page}`);

    expect(roomsList).toEqual(mockData);
  });
  it("should throw an error when fetch fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    try {
      await RoomsService.fetchRooms(1);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe("It failed to fetch the rooms");
    }
  });
});
