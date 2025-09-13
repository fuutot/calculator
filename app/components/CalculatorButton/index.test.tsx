/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CalculatorButton, { CalculatorButtonProps } from "./index";

// Mock the CSS module
jest.mock("./CalculatorButton.module.css", () => ({
  btn: "btn",
  equal: "equal",
  clear: "clear",
}));

describe("CalculatorButton", () => {
  const defaultProps: CalculatorButtonProps = {
    label: "1",
    onClick: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the button with the correct label", () => {
    const { getByRole } = render(<CalculatorButton {...defaultProps} />);
    expect(getByRole("button")).toHaveTextContent("1");
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <CalculatorButton {...defaultProps} onClick={onClick} />,
    );
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies the default btn class", () => {
    const { getByRole } = render(<CalculatorButton {...defaultProps} />);
    expect(getByRole("button").className).toContain("btn");
  });

  it('applies the "equal" class when variant is "equal"', () => {
    const { getByRole } = render(
      <CalculatorButton {...defaultProps} variant="equal" />,
    );
    const btn = getByRole("button");
    expect(btn.className).toContain("btn");
    expect(btn.className).toContain("equal");
  });

  it('applies the "clear" class when variant is "clear"', () => {
    const { getByRole } = render(
      <CalculatorButton {...defaultProps} variant="clear" />,
    );
    const btn = getByRole("button");
    expect(btn.className).toContain("btn");
    expect(btn.className).toContain("clear");
  });

  it('does not apply "equal" or "clear" class when variant is undefined', () => {
    const { getByRole } = render(<CalculatorButton {...defaultProps} />);
    const btn = getByRole("button");
    expect(btn.className).toBe("btn");
  });
});
