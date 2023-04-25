import React from "react";
import "./Button.styles.css";

function Button({
  onClick,
  label,
  type,
  icon,
  className,
  disabled,
  btnType,
  isDisabled,
}) {
  let propStyle = "";
  switch (type) {
    case "primary":
      propStyle = "bg-primary-P50 text-white-P50";
      break;

    case "secondary":
      propStyle = "btn-secondary text-white-P50";
      break;

    default:
      break;
  }

  if (disabled) {
    propStyle += " italic";
  }
  if (isDisabled) {
    propStyle += " opacity-50";
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={btnType}
      class={className + " text-sm py-4 px-6 rounded-lg " + propStyle}
    >
      {icon && <p>{icon}</p>}
      {label}
      {disabled && " . . ."}
    </button>
  );
}

export default Button;
