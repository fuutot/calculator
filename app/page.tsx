export default function Home() {
  return (
    <div className="calculator-container">
      <Display />
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
          />
        ))}
        <CalculatorButton
          label="Clear"
          className="calculator-btn calculator-clear"
        />
      </div>
    </div>
  );
}

export function Display() {
  // 計算式を表示するコンポーネント
  return <div className="calculator-display">{"0"}</div>;
}

export function Result() {
  // 計算結果を表示するコンポーネント
  return <div className="calculator-result">{"0"}</div>;
}

type CalculatorButtonProps = {
  label: string; // ボタンに表示するテキスト
  className: string; // ボタンのクラス名
};

export function CalculatorButton({ label, className }: CalculatorButtonProps) {
  return <button className={className}>{label}</button>;
}
