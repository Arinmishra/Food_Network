import ResDetails from "../components/ResDetails";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/singleResData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render ResDetails component with accordian heading Recommended (11)", async () => {
  await act(async () => render(<ResDetails />));

  expect(screen.getByText("Recommended (11)")).toBeInTheDocument();
});

it("should render ResDetails component with accordian body having 11 food items in Recommended", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <ResDetails />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Recommended (11)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItem").length).toBe(11);
});

it("should render ResDetails component with 11 ADD buttons in Recommended (11)", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <ResDetails />
      </Provider>
    )
  );
  fireEvent.click(screen.getByText("Recommended (11)"));
  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  expect(addBtns.length).toBe(11);
});
