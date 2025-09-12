import { Expression } from "@/lib/expression";
import styles from "./Display.module.css";

export default function Display({ expression }: { expression: Expression }) {
  // 計算式を表示するコンポーネント
  return (
    <div className={styles.calculatorDisplay}>
      {expression.get_expression()}
    </div>
  );
}
