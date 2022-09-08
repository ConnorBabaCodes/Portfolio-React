import React from 'react'
import projectData from '/src/assets/projectdata.js'




export default function Projects() {
    const projectElements = projectData.map(project => {
        return <div className="project">
                <h2>
                    {project.name}
                    </h2>
                    <img />
                <p>
                    {project.description}
                    </p>
                <div className="demo">
                    <a href={project.github}>&lt; / Code &gt;</a>  
                    <a href={project.demo}>Demo</a>
                </div>
        </div> 
    })
    
    return (
        <section id="projects" className="projects-section">
            <h1>PROJECTS</h1>
            <div className="project-container">{projectElements}</div>
        
        </section>
    )
}