import React from "react";
import "./Button.css";

export function Button({ content, children, downloaded }) {
  return (
    <div className="button">
      {children}
      <span>{content}</span>
    </div>
  );
}
