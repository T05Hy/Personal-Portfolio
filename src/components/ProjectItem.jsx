import React from 'react';

const ProjectItem = ({ title, description, category, year, highlights, stack, image }) => {
  return (
    <article className="project-card">
      <div className="project-media" aria-label={`${title} preview`}>
        {image ? <img src={image} alt={`${title} preview`} /> : <span>Project Preview</span>}
      </div>

      <div className="project-content">
        <div className="project-header">
          <span className="project-tag">{category}</span>
          <span className="project-year">{year}</span>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="project-points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="tech-list">
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;