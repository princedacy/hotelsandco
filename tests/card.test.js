import React from "react";
import { act, fireEvent, render, wait } from "@testing-library/react";
import Card from "../components/Card";


test("Card fetches rooms data and renders correctly", async () => {
  // Set up the mock service worker to return a specific response
  const { getByText, getByAltText, getAllByTestId } = render(<Card />);

  // Wait for the data to load
  await wait(() => expect(getByText("Loading...")).toBeInTheDocument());
  await wait(() =>
    expect(getByText("Beautiful Beachfront Apartment")).toBeInTheDocument()
  );

  // Verify that the images are displayed
  const images = getAllByTestId("room-image");
  expect(images).toHaveLength(2);
  expect(images[0].src).toBe("https://example.com/image1.jpg");
  expect(images[1].src).toBe("https://example.com/image2.jpg");

  // Click on the first room
  act(() => {
    fireEvent.click(getByText("Beautiful Beachfront Apartment"));
  });

  // Wait for the page to navigate
  await wait(() =>
    expect(getByText("Beautiful Beachfront Apartment")).toBeInTheDocument()
  );

  // Render the component
  const { container } = render(<Card />);

  // Wait for the component to finish loading data
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  // Take a snapshot of the component
  expect(container).toMatchSnapshot();
});
