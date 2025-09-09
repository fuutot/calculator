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
    // 想定外の文字が含まれていないかをチェック
    if (!Expression.isExpectedChars(expr)) {
      return false;
    }
    // 数字や演算子が連続していないかをチェック
    if (!Expression.isValidSequence(expr)) {
      return false;
    }
    return true;
  }

  private static isExpectedChars(expr: string): boolean {
    const validChars = /^[0-9+\-*/.]+$/;
    return validChars.test(expr);
  }

  private static isValidSequence(expr: string): boolean {
    // 演算子が連続していないかをチェック
    const invalidSequence = /[+\-*/.]{2,}/;
    if (invalidSequence.test(expr)) {
      return false;
    }
    // 先頭に演算子が来ていないかをチェック
    if (/[+\-*/.]/.test(expr.charAt(0))) {
      return false;
    }
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
