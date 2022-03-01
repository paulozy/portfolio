import React from "react";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejsSmall,
  DiGit,
  DiMongodb,
} from "react-icons/di";
import { SiAdonisjs } from "react-icons/si";
import { Stack } from "../Stack";
import "./Greeting.css";

export function Greeting() {
  return (
    <div className="greeting">
      <div className="stacks">
        <Stack
          stack="Front-End"
          desc="I develop front-end with codign super smooth"
        >
          <DiReact />
          <DiHtml5 />
          <DiCss3 />
          <DiJavascript />
        </Stack>
        <Stack stack="Back-End" desc="I develop back-end super fast">
          <DiNodejsSmall />
          <DiGit />
          <DiMongodb />
          <SiAdonisjs />
        </Stack>
      </div>
      <div className="about-me">
        <span className="me-name">Hello! I'm Paulo.</span>
        <span className="me-work">
          I'm currently an intern at{" "}
          <a href="https://luby.com.br/">Luby Software</a>
        </span>
        <span className="me-work-desc">
          I develop web applications, both front-end and back-end, but back-end
          is my preference
        </span>
      </div>
    </div>
  );
}
