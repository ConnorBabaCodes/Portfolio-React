import React from 'react'
import projectData from '/src/assets/projectdata.js'




export default function Projects() {
    const projectElements = projectData.map(project => {
        return <div>
                <h2>
                    {project.name}
                    </h2>
                <p>
                    {project.description}
                    </p>
                <p>
                    {project.tech}
                    </p>
                <div>
                    {project.github}{project.demo}
                </div>
        </div> 
    })
    
    return (
        <section>
            <h1>PROJECTS</h1>
            <div>{projectElements}</div>
        
        </section>
    )
}