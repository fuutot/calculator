import { Expression } from "./expression";

describe("Expression", () => {
  describe("isValid", () => {
    it("should return true for valid expressions", () => {
      expect(Expression.isValid("3+5")).toBe(true);
      expect(Expression.isValid("10-2*3")).toBe(true);
      expect(Expression.isValid("4/2+6.5")).toBe(true);
      expect(Expression.isValid("0.1+0.2")).toBe(true);
    });

    it("should return false for invalid expressions", () => {
      expect(Expression.isValid("3a+5")).toBe(false); // 想定外の文字
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
    });
  });

  describe("add", () => {
    it("should add element to the expression", () => {
      const expr = new Expression("3+5");
      const newExpr = expr.add("2");
      expect(newExpr.get_expression()).toBe("3+52");
    });

    it("should replace default expression '0' when adding non-dot element", () => {
      const expr = new Expression();
      const newExpr = expr.add("7");
      expect(newExpr.get_expression()).toBe("7");
    });

    it("should append dot to default expression '0'", () => {
      const expr = new Expression();
      const newExpr = expr.add(".");
      expect(newExpr.get_expression()).toBe("0.");
    });

    it("should not change expression if adding invalid element", () => {
      const expr = new Expression("3+5");
      const newExpr = expr.add("a");
      expect(newExpr.get_expression()).toBe("3+5");
    });
  });

  describe("calculate", () => {
    it("should return 'Error' for invalid expressions", () => {
      const expr = new Expression("3+5*");
      const resultExpr = expr.calculate();
      expect(resultExpr.get_expression()).toBe("3+5*");
      expect(resultExpr.get_result()).toBe("Error");
    });
  });

  describe("clear", () => {
    it("should reset expression and result to default values", () => {
      const expr = new Expression("3+5", "8");
      const clearedExpr = expr.clear();
      expect(clearedExpr.get_expression()).toBe("0");
      expect(clearedExpr.get_result()).toBe("0");
    });
  });
});
