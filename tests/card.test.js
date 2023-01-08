import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import ServiceWorker from "../mocks/service-worker";
import Card from "../components/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

global.window = {};

const queryClient = new QueryClient();

describe("Card", () => {
  beforeEach(() => {
    ServiceWorker.mockClear();
    if (!window.navigator.serviceWorker) {
      window.navigator.serviceWorker = {};
    }
    window.navigator.serviceWorker.register = jest.fn();
  });

  it("should render the component and take a snapshot", async () => {
    jest.setTimeout(20000);
    const originalUseQuery = React.useQuery;
    React.useQuery = jest.fn(() => ({
      data: [
        {
          number: 89025,
          status: false,
          wifi: true,
          location: "Rogers",
          image: "https://loremflickr.com/640/480/city",
          price: "517.00",
          rating: "1",
          description:
            "Quisquam in cumque. Laboriosam ipsum dignissimos consequuntur iusto ipsum blanditiis. Iusto expedita provident pariatur minima tempora quidem assumenda corporis. Sequi illum voluptatum impedit voluptatum voluptatibus dolores quibusdam nulla quis. Repellendus est voluptates officia commodi nihil vel quaerat adipisci doloremque. Tempore laboriosam earum eum veniam reiciendis non culpa.",
          reviews: "2",
          host_image:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/72.jpg",
          guests: "1",
          bedrooms: "1",
          beds: "2",
          baths: "3",
          host_name: "Mr. Marc Simonis",
          city: "Southaven",
          id: "1",
        },
      ],
      isLoading: false,
      error: null,
    }));

    const tree = (
      <QueryClientProvider client={queryClient}>
        <Card />
      </QueryClientProvider>
    );
    const { container } = render(tree);
    expect(container).toMatchSnapshot();

    await act(async () => {
      expect(container).toMatchSnapshot();
      await waitFor(() =>
        expect(screen.getByText("Rogers")).toBeInTheDocument()
      );
      await waitFor(() => expect(screen.getByAltText("")).toBeInTheDocument());
      await waitFor(() =>
        expect(screen.getByText("Southaven")).toBeInTheDocument()
      );
      await waitFor(() =>
        expect(screen.getByText("Jan 1 – 6")).toBeInTheDocument()
      );
      await waitFor(() =>
        expect(screen.getByText("$517 night")).toBeInTheDocument()
      );
    });

    React.useQuery = originalUseQuery;
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
