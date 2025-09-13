/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Expression } from "@/lib/expression";
import Display from "./index";

// Mock the CSS module
jest.mock("./Display.module.css", () => ({
  calculatorDisplay: "calculatorDisplay",
}));

describe("Display component", () => {
  it("renders the expression from props", () => {
    const mockValue = "1+2*3";
    const expression = {
      get_expression: () => mockValue,
    } as Expression;

    render(<Display expression={expression} />);
    expect(screen.getByText(mockValue)).toBeInTheDocument();
  });

  it("applies the correct className", () => {
    const mockvalue = "1+2";
    const expression = {
      get_expression: () => mockvalue,
    } as Expression;
    const { container } = render(<Display expression={expression} />);
    const div = container.querySelector("div");
    expect(div).toHaveClass("calculatorDisplay");
  });
});
