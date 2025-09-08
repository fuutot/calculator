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
          "X",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((btn) => (
          <button
            key={btn}
            className={
              btn === "=" ? "calculator-btn calculator-equal" : "calculator-btn"
            }
          >
            {btn}
          </button>
        ))}
        <button className="calculator-btn calculator-clear">Clear</button>
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
