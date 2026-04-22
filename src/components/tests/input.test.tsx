import { fireEvent, render, screen } from "@testing-library/react";
import * as Input from "../input/index";

describe("Input Component", () => {
  it("should render the input component", () => {
    render(<Input.Field type="text" placeholder="Enter text" />);

    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });
  it("check if the input field is disabled ", () => {
    render(<Input.Field type="text" placeholder="Enter text" disabled />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeDisabled();
  });

  it.only("Check if the input field is triggering the onchange event", () => {
    const handleChange = jest.fn();

    render(
      <Input.Field
        type="text"
        placeholder="Enter text"
        onChange={handleChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "love love" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
