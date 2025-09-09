export class Expression {
  private expr: string;

  constructor(expr: string = "0") {
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

  toString(): string {
    return this.expr;
  }
}
