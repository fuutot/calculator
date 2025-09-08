"use client";
import { useState } from "react";

export default function Home() {
  const [expression, setExpression] = useState("1");

  return (
    <div className="calculator-container">
      <Display expression={expression} />
      <Result />
      <div className="calculator-buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "x",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((btn) => (
          <CalculatorButton
            key={btn}
            label={btn}
            className={
              btn === "=" ? "calculator-btn calculator-equal" : "calculator-btn"
            }
            onClick={() => {
              /* クリック時の処理 */
            }}
          />
        ))}
        <CalculatorButton
          label="Clear"
          className="calculator-btn calculator-clear"
          onClick={() => {
            setExpression("0");
          }}
        />
      </div>
    </div>
  );
}

export function Display({ expression }: { expression: string }) {
  // 計算式を表示するコンポーネント
  return <div className="calculator-display">{expression}</div>;
}

export function Result() {
  // 計算結果を表示するコンポーネント
  return <div className="calculator-result">{"0"}</div>;
}

type CalculatorButtonProps = {
  label: string; // ボタンに表示するテキスト
  className: string; // ボタンのクラス名
  onClick: () => void; // ボタンがクリックされたときの処理
};

export function CalculatorButton({
  label,
  className,
  onClick,
}: CalculatorButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
