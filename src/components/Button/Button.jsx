import React from "react";
import "./btn.css";

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <span>add task...</span>
    </button>

  );
};

export default Button;
