import React from "react";

const Button = ({ variant, ...props }) => (
  <button {...props} className={`button ${variant}`} />
);

Button.displayName = "Button";

export default Button;
