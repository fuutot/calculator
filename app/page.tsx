"use client";
import { useState } from "react";
import { Expression } from "./expression";
import Display from "./components/Display";
import Result from "./components/Result";

export default function Home() {
  const [expression, setExpression] = useState(new Expression());

  return (
    <div className="calculator-container">
      <Display expression={expression} />
      <Result expression={expression} />
      <div className="calculator-buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
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
              if (btn !== "=") {
                setExpression(expression.add(btn));
              } else {
                setExpression(expression.calculate());
              }
            }}
          />
        ))}
        <CalculatorButton
          label="Clear"
          className="calculator-btn calculator-clear"
          onClick={() => {
            setExpression(expression.clear());
          }}
        />
      </div>
    </div>
  );
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
