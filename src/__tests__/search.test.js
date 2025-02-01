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

it("Should render Body component with search textbox", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchTextbox = screen.getByPlaceholderText("Search Restaurants");

  expect(searchTextbox).toBeInTheDocument();
});

it("Should render Body component with 20 Restaurant cards before search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const rescardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(rescardsBeforeSearch.length).toBe(20);
});

it("Should render Body component with 1 Restaurant card when chinese wok is searched", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  fireEvent.change(screen.getByPlaceholderText("Search Restaurants"), {
    target: { value: "chinese wok" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Search" }));
  const rescardsAfterSearch = screen.getAllByTestId("resCard");

  expect(rescardsAfterSearch.length).toBe(1);
});

it("Should render Body Compenent with something if there are 0 restaurant cards", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  fireEvent.change(screen.getByPlaceholderText("Search Restaurants"), {
    target: { value: "abcd" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Search" }));
  expect(screen.getByText("No Restaurants Found:)"));
});
