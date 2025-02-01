import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("Should load Contact Us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load Submit button", () => {
    render(<Contact />);

    const submit = screen.getByRole("button");
    expect(submit).toBeInTheDocument();
  });

  it("should have 3 text boxes", () => {
    render(<Contact />);

    const textBoxes = screen.getAllByRole("textbox");

    expect(textBoxes.length).toBe(3);
  });

  it("Should load text box name", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });
});
