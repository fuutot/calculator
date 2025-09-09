export class Expression {
  private expr: string;
  private static DEFAULT_EXPRESSION = "0";

  constructor(expr: string = Expression.DEFAULT_EXPRESSION) {
    if (!Expression.isValid(expr)) {
      throw new Error("Invalid expression");
    }
    this.expr = expr;
  }

  static isValid(expr: string): boolean {
    // ここにバリデーションロジックを追加
    return true;
  }

  add(element: string): Expression {
    return new Expression(this.expr + element); // バリデーションはコンストラクタで行う
  }

  clear(): Expression {
    return new Expression();
  }

  toString(): string {
    return this.expr;
  }
}
