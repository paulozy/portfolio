import React from "react";
import { Repository } from "../Repository";
import "./Projects.css";

export function Projects({ repositories }) {
  return (
    <div className="repositories">
      {repositories.map((repository, index) => (
        <Repository key={index} repository={repository} />
      ))}
    </div>
  );
}
