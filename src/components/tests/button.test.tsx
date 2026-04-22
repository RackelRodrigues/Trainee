import { render, screen } from "@testing-library/react";
import Button from "../button";

describe("button Component", () => {
  it("Render the component if visibly ", () => {
    render(<Button disabled>click me</Button>);

    expect(screen.getByText("click me")).toBeInTheDocument();
  });

  it("check if the button is disabled ", () => {
    render(<Button disabled>click me</Button>);

    const buttonElement = screen.getByText("click me");
    expect(buttonElement).toBeDisabled();
  });
  it("renders primary button with text", () => {
    render(<Button className="primary">primary</Button>);

    const button = screen.getByRole("button", { name: "primary" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("primary");
  });
  it("renders secondary button with text", () => {
    render(<Button className="secondary">secondary</Button>);

    const button = screen.getByRole("button", { name: "secondary" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("secondary");
  });

  it("renders tertiary button with text", () => {
    render(<Button className="tertiary">tertiary</Button>);

    const button = screen.getByRole("button", { name: "tertiary" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("tertiary");
  });
});
