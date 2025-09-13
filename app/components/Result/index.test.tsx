/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Expression } from "@/lib/expression";
import Result from "./index";

// Mock the CSS module
jest.mock("./Result.module.css", () => ({
  calculatorResult: "calculatorResult",
}));

describe("Result component", () => {
  it("renders the result from expression.get_result()", () => {
    const mockResult = "42";
    const expression = {
      get_result: () => mockResult,
    } as Expression;
    render(<Result expression={expression} />);
    expect(screen.getByText(mockResult)).toBeInTheDocument();
  });

  it("applies the correct CSS class", () => {
    const mockResult = "100";
    const expression = {
      get_result: () => mockResult,
    } as Expression;
    render(<Result expression={expression} />);
    const div = screen.getByText(mockResult);
    expect(div).toHaveClass("calculatorResult");
  });
});
