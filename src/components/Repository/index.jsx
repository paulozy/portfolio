import React from "react";
import { RiBookMarkFill } from "react-icons/ri";
import "./Repository.css";

export function Repository({ repository }) {
  console.log(repository);

  return (
    <div className="repo-card">
      <div className="repo-name">
        <RiBookMarkFill />
        <a href={repository.html_url} target="_blank">
          {repository.name}
        </a>
      </div>
      <p>{repository.description}</p>
    </div>
  );
}
