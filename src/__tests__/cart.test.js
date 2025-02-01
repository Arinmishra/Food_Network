import { act, fireEvent, render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ResDetails from "../components/ResDetails";
import MOCK_DATA from "../mocks/singleResData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Cart heading in cart page", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
});

it("Should render cart component with nav bar as Cart(0)🛒 when 0 items in cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const beforeAddingToCart = screen.getByRole("link", { name: "Cart(0)🛒" });
  expect(beforeAddingToCart).toBeInTheDocument();
});

it("Should render cart component with nav bar as Cart(1)🛒 when 1 item in cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResDetails />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  fireEvent.click(screen.getByText("Recommended (11)"));

  const addBtns = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart(1)🛒")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart(2)🛒")).toBeInTheDocument();

  expect(screen.getAllByTestId("cartItem").length).toBe(2);
});

it("Should render cart component with Clear Cart button", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <Cart />
      </Provider>
    )
  );

  expect(
    screen.getByRole("button", { name: "Clear Cart" })
  ).toBeInTheDocument();
});

it("Should render cart component with something if it has 0 items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResDetails />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(
    screen.getByText("Cart is empty🧺. Please add items to Cart😊.")
  ).toBeInTheDocument();
});
