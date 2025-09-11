import styles from "./CalculatorButton.module.css";

export type CalculatorButtonProps = {
  label: string;
  variant?: "equal" | "clear"; // ボタンの種類
  onClick: () => void;
};

export default function CalculatorButton({
  label,
  variant,
  onClick,
}: CalculatorButtonProps) {
  let className = styles.btn;
  if (variant === "equal") className += " " + styles.equal;
  if (variant === "clear") className += " " + styles.clear;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
