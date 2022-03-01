import React from "react";
import "./Stack.css";

export function Stack({ stack, desc, children }) {
  return (
    <div className="stack">
      <h3>{stack}</h3>
      <span>{desc}</span>
      <div className="languages">{children}</div>
    </div>
  );
}
