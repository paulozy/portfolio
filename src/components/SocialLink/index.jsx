import React from "react";
import "./SocialLink.css";

export function SocialLink({ href, children }) {
  return (
    <a className="social-link" href={href} target="_blank">
      {children}
    </a>
  );
}
