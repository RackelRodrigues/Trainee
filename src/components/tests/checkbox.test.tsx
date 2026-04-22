import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../checkbox";

describe("CheckBox", () => {
  it("check the component visibly ", () => {
    render(<Checkbox label="Aceitar termos" />);

    expect(screen.getByLabelText("Aceitar termos")).toBeInTheDocument();
  });

  it("it should be checked when clicked", () => {
    render(<Checkbox label="Aceitar termos" />);

    const checkbox = screen.getByLabelText("Aceitar termos");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("Check if the checkbox is unchecked by default", () => {
    render(<Checkbox label="Aceitar termos" />);

    const checkbox = screen.getByLabelText("Aceitar termos");
    expect(checkbox).not.toBeChecked();
  });

  it("Check if the checkbox is disabled", () => {
    render(<Checkbox label="Aceitar termos" disabled />);

    const checkbox = screen.getByLabelText("Aceitar termos");
    expect(checkbox).toBeDisabled();
  });
});
