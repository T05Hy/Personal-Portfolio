import React from 'react';

const ProjectItem = ({ title, description, tools, technologies, sectionId, onClick }) => {
  return (
    <button onClick={onClick} style={projectItemStyle}>
      <div style={projectItemInnerStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div style={detailsStyle}>
          <span><strong>Tools:</strong> {tools.join(', ')}</span>
          <span><strong>Technologies:</strong> {technologies.join(', ')}</span>
        </div>
      </div>
    </button>
  );
};


const projectItemStyle = {
  padding: '1rem',
  width: '200px', // Set a fixed width
  height: '200px', // Set a fixed height
  backgroundColor: '#444',
  borderRadius: '5px',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', // Increased shadow blur and spread
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
};


const projectItemInnerStyle = {
  padding: '0.5rem',
  textAlign: 'center'
};

const detailsStyle = {
  marginTop: '0.5rem',
  fontSize: '0.9em',
  color: '#ddd'
};

export default ProjectItem;