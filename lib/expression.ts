import { create, all, ConfigOptions } from "mathjs";

const config: ConfigOptions = {
  number: "BigNumber",
  precision: 20,
};
const math = create(all, config);

export class Expression {
  private expr: string;
  private result: string;
  private static DEFAULT_EXPRESSION = "0";
  private static DEFAULT_RESULT = "0";

  constructor(
    expr: string = Expression.DEFAULT_EXPRESSION,
    result: string = Expression.DEFAULT_RESULT,
  ) {
    if (!Expression.isValid(expr)) {
      throw new Error("Invalid expression");
    }
    this.expr = expr;
    this.result = result;
  }

  static isValid(expr: string): boolean {
    // 想定外の文字が含まれていないかをチェック
    if (!Expression.isExpectedChars(expr)) {
      return false;
    }
    return true;
  }

  private static isExpectedChars(expr: string): boolean {
    const validChars = /^[0-9+\-*/.]+$/;
    return validChars.test(expr);
  }

  add(element: string): Expression {
    let newExpr = this.expr + element;
    // 式が0の場合、.でない限り置き換える
    if (this.expr === Expression.DEFAULT_EXPRESSION && element !== ".") {
      newExpr = element;
    }

    try {
      return new Expression(newExpr); // バリデーションはコンストラクタで行う
    } catch (_) {
      return this; // エラーが発生した場合は変更しない
    }
  }

  calculate(): Expression {
    try {
      // 計算を実行
      const result = math.evaluate(this.expr).toString();
      return new Expression(result, result);
    } catch {
      return new Expression(this.expr, "Error");
    }
  }

  clear(): Expression {
    return new Expression();
  }

  get_expression(): string {
    return this.expr;
  }

  get_result(): string {
    return this.result;
  }
}
