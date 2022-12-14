import React from "react";
import projectData from "/src/assets/projectdata.js";

export default function Projects() {
  const projectElements = projectData.map((project) => {
    return (
      <div className="project">
        <a
          href={project.demo ? project.demo : project.github}
          aria-label={`${project.name}`}
          target="_blank"
        >
          <img
            src={project.smallimg}
            srcSet={`${project.smallimg} 868w, ${project.img} 1200w`}
            alt={`${project.name} cover image`}
          />
        </a>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className="tech">
          {project.HTML ? <p className="HTML">HTML</p> : ""}
          {project.CSS ? <p className="CSS">CSS</p> : ""}
          {project.JS ? <p className="js">Javascript</p> : ""}
          {project.React ? <p className="react">React</p> : ""}
          {project.Firebase ? <p className="firebase">Firebase</p> : ""}
        </div>
        <div className="demo">
          <a href={project.github} target="_blank">
            &lt; / Code &gt;
          </a>
          {project.demo ? (
            <a href={project.demo} target="_blank">
              Demo
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  });

  return (
    <section id="projects" className="projects-section">
      <h1>PROJECTS</h1>
      <div className="project-container">{projectElements}</div>
    </section>
  );
}
