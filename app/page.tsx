"use client";
import { useState } from "react";
import { Expression } from "./expression";
import Display from "./components/Display";
import Result from "./components/Result";
import CalculatorButton from "./components/CalculatorButton";

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
            variant={btn === "=" ? "equal" : undefined}
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
          variant="clear"
          onClick={() => {
            setExpression(expression.clear());
          }}
        />
      </div>
    </div>
  );
}
