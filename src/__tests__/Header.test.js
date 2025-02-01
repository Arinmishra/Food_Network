import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "@testing-library/jest-dom";

it("Should load Header component with Home link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const headerLink = screen.getByRole("link", { name: "Home" });

  expect(headerLink).toBeInTheDocument();
});

it("Should render header with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should render header with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart(0)🛒");

  expect(cartItems).toBeInTheDocument();
});

describe("Should render header with 🟢Online/🔴Offline", () => {
  it("Should render header with status", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const status = screen.getByTestId("status");
    expect(status).toBeInTheDocument();
  });

  // The reason you can't use fireEvent.online directly is that fireEvent works with custom events, and online and offline are native browser events, not custom ones.
  // fireEvent.click() works for simulating click events on elements because it is directly supported as a native event. For events like online and offline, you need to manually fire them using fireEvent(window, new Event('offline')) or fireEvent(window, new Event('online')), as they are environmental events not inherently handled by fireEvent.

  it("Should render header with 🟢Online when online", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    fireEvent(window, new Event("online"));
    const onlineStatus = screen.getByText("🟢Online");
    expect(onlineStatus).toBeInTheDocument();
  });

  it("Should render header with 🔴Offline when offline", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    fireEvent(window, new Event("offline"));
    const offlineStatus = screen.getByText("🔴Offline");
    expect(offlineStatus).toBeInTheDocument();
  });
});
