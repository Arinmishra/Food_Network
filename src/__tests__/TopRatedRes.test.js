import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/ResListMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Body component with Top Rated Restaurants button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedResBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(topRatedResBtn).toBeInTheDocument();
});

it("Should render Body component with 20 restaurant cards before clicking Top Rated Restaurants button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  expect(screen.getAllByTestId("resCard").length).toBe(20);
});

it("Should render Body component with 19 restaurant cards after clicking Top Rated Restaurants button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  fireEvent.click(
    screen.getByRole("button", { name: "Top Rated Restaurants" })
  );
  expect(screen.getAllByTestId("resCard").length).toBe(19);
});
