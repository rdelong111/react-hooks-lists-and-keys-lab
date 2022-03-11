import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectElements = projects.map((singleP) => {
    return (
      <ProjectItem
        key={singleP.id}
        name={singleP.name}
        about={singleP.about}
        technologies={singleP.technologies}
      />
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectElements}
      </div>
    </div>
  );
}

export default ProjectList;
