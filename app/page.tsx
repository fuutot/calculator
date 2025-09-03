export default function Home() {
  return (
    <div className="calculator-container">
      <div className="calculator-display">{"0"}</div>
      <div className="calculator-result">{"0"}</div>
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
