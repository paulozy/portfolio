import React from "react";
import "./Button.css";

export function Button({ content, children }) {
  return (
    <button className="button">
      {children}
      <span>{content}</span>
    </button>
  );
}
