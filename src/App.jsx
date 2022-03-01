import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Greeting } from "./components/Greeting";
import { Projects } from "./components/Projects";

import "./App.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    function getRepositories() {
      fetch("https://api.github.com/users/paulozy/repos?per_page=6")
        .then((res) => res.json())
        .then(setRepositories);
    }
    getRepositories();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Greeting />
      </div>
      <div className="projects">
        <h3>PROJECTS</h3>
        <Projects repositories={repositories} />
      </div>
    </>
  );
}

export default App;
