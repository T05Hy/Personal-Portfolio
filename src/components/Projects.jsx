// src/components/Projects.jsx
import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
  { 
    id: 1, 
    title: 'Project 1', 
    description: 'Description of Project 1', 
    sectionId: 'project1', 
    tools: ['React', 'Node.js'], 
    technologies: ['JavaScript', 'CSS'] 
  },
  { 
    id: 2, 
    title: 'Project 2', 
    description: 'Description of Project 2', 
    sectionId: 'project2', 
    tools: ['Vue.js', 'MongoDB'], 
    technologies: ['JavaScript', 'HTML', 'CSS'] 
  },
  { 
    id: 3, 
    title: 'Project 3', 
    description: 'Description of Project 3', 
    sectionId: 'project3', 
    tools: ['Angular', 'Firebase'], 
    technologies: ['TypeScript', 'HTML', 'CSS'] 
  },
  { 
    id: 4, 
    title: 'Project 4', 
    description: 'Description of Project 4', 
    sectionId: 'project4', 
    tools: ['React', 'Firebase'], 
    technologies: ['JavaScript', 'HTML', 'CSS'] 
  }
];

const Projects = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2>Projects</h2>
      <div style={projectContainerStyle}>
        {projects.map(project => (
          <ProjectItem 
            key={project.id} 
            {...project} 
            onClick={() => scrollToSection(project.sectionId)} 
          />
        ))}
      </div>
      {/* Project Sections */}
      <section id="project1" style={projectSectionStyle}>
        <h3>Project 1</h3>
        <p>{projects[0].description}</p>
      </section>
      <section id="project2" style={projectSectionStyle}>
        <h3>Project 2</h3>
        <p>{projects[1].description}</p>
      </section>
      <section id="project3" style={projectSectionStyle}>
        <h3>Project 3</h3>
        <p>{projects[2].description}</p>
      </section>
      <section id="project4" style={projectSectionStyle}>
        <h3>Project 4</h3>
        <p>{projects[3].description}</p>
      </section>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
  backgroundColor: '#333',
  color: '#fff'
};

const projectContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center' // Center items horizontally
};

const projectSectionStyle = {
  padding: '2rem',
  margin: '2rem 0',
  backgroundColor: '#444',
  color: '#fff',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

export default Projects;