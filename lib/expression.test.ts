import { Expression } from "./expression";

describe("Expression", () => {
  describe("isValid", () => {
    it("should return true for valid expressions", () => {
      expect(Expression.isValid("3+5")).toBe(true);
      expect(Expression.isValid("10-2*3")).toBe(true);
      expect(Expression.isValid("4/2+1.5")).toBe(true);
      expect(Expression.isValid("0.5*8")).toBe(true);
      expect(Expression.isValid("0+0.1")).toBe(true);
    });

    it("should return false for expressions with invalid characters", () => {
      expect(Expression.isValid("3a+5")).toBe(false);
      expect(Expression.isValid("10-2*3#")).toBe(false);
      expect(Expression.isValid("4/2+1.5$")).toBe(false);
    });

    it("should return false for expressions with invalid sequences", () => {
      expect(Expression.isValid("+3+5")).toBe(false);
      expect(Expression.isValid("10--2*3")).toBe(false);
      expect(Expression.isValid("4/2++1.5")).toBe(false);
      expect(Expression.isValid("3..5+2")).toBe(false);
    });

    it("should return false for expressions with invalid numbers", () => {
      expect(Expression.isValid("03+5")).toBe(false);
      expect(Expression.isValid("10-02*3")).toBe(false);
      expect(Expression.isValid("004/2+1.5")).toBe(false);
    });
  });

  describe("constructor", () => {
    it("should create an instance with default values", () => {
      const expr = new Expression();
      expect(expr).toBeInstanceOf(Expression);
    });

    it("should create an instance with valid expression and result", () => {
      const expr = new Expression("3+5", "8");
      expect(expr).toBeInstanceOf(Expression);
    });

    it("should throw an error for invalid expression", () => {
      expect(() => new Expression("3a+5")).toThrow("Invalid expression");
      expect(() => new Expression("+3+5")).toThrow("Invalid expression");
      expect(() => new Expression("03+5")).toThrow("Invalid expression");
    });
  });
});
