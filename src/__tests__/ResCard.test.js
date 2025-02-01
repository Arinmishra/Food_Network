import { render, screen } from "@testing-library/react";
import ResCard from "../components/ResCard";
import MOCK_DATA from "../mocks/ResCardData.json";
import "@testing-library/jest-dom";

it("Should load Pizza Hut restaurant card", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
