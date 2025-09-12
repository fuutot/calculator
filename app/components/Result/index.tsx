import { Expression } from "@/app/expression";
import styles from "./Result.module.css";

export default function Result({ expression }: { expression: Expression }) {
  // 計算結果を表示するコンポーネント
  return (
    <div className={styles.calculatorResult}>{expression.get_result()}</div>
  );
}
