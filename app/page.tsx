"use client";
import { useState } from "react";
import { Expression } from "./expression";
import Display from "./components/Display";
import Result from "./components/Result";
import CalculatorButton from "./components/CalculatorButton";

const BUTTONS = [
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
];

export default function Home() {
  const [expression, setExpression] = useState(new Expression());

  const handleButtonClick = (btn: string) => {
    if (btn === "=") {
      setExpression(expression.calculate());
    } else if (btn === "Clear") {
      setExpression(expression.clear());
    } else {
      setExpression(expression.add(btn));
    }
  };

  return (
    <div className="calculator-container">
      <Display expression={expression} />
      <Result expression={expression} />
      <div className="calculator-buttons">
        {BUTTONS.map((btn) => (
          <CalculatorButton
            key={btn}
            label={btn}
            variant={btn === "=" ? "equal" : undefined}
            onClick={() => {
              handleButtonClick(btn);
            }}
          />
        ))}
        <CalculatorButton
          label="Clear"
          variant="clear"
          onClick={() => {
            handleButtonClick("Clear");
          }}
        />
      </div>
    </div>
  );
}
