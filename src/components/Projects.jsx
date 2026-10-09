import React from 'react';
import ProjectItem from './ProjectItem';
import terrainPreview from '../../Images/2Dto3DTerrainExample.png';

import SandSimPreview from '../../Images/SandSimExample.png';

import ScranSwapPreview from '../../Images/ScranSwapExample.png';

import ESPreview from '../../Images/ESP32Example.webp';

import DevOpsPreview from '../../Images/DevOpsExample.png';

import UnityPreview from '../../Images/UnityGameExample.png';

const projects = [
  {
    id: 1,
    image: terrainPreview,
    title: '2D to 3D Terrain Generation Leveraging AI',
    category: 'Academic Research',
    year: '2026',
    description:
      'Exploring a new method for generating 3D terrain from 2D images using Machine Learning Models, and segmenting the terrain to find features within each image',
    highlights: [
      'Built for academic research to explore the potential of AI in terrain generation in place of traditional procedural methods',
      'Findings show if pushed further this method could be a viable alternative to procedural generation, with the ability to generate more realistic terrain and features',
    ],
    stack: ['OpenGL', 'C++', 'Python', 'Pytorch', 'DinoV2 Model', 'MiDas Model', 'Kaggle Terrain Dataset']
  },
  {
    id: 2,
    image: SandSimPreview,
    title: 'Falling Sand Simulation',
    category: 'Personal Project',
    year: '2024',
    description:
      'While learning OpenGL, I created a falling sand simulation to explore particle physics and fluid dynamics in a 2D environment.',
    highlights: [
      'Grains have adjustable size and the value of gravity can be changed.',
      'Grains can interact with each other and the environment, allowing for the creation of patterns.',
    ],
    stack: ['React', 'Node.js', 'APIs', 'Responsive UI']
  },
  {
    id: 3,
    image: ScranSwapPreview,
    title: 'Live Free Food Distribution Web Application',
    category: 'Academic Project',
    year: '2025',
    description:
      'A way of authenticated users to distribute free food to other users, with a live interface and google maps integration',
    highlights: [
      'Focus on user experience and accessibility',
      'Analytical data is stored on a backend database, allowing for data analysis'
    ],
    stack: ['React', 'Vite', 'HTML', 'CSS', 'Docker', 'Docker Compose', 'GitHub', 'Git', 'MySQL', 'JavaScript', 'Google Maps']
  },
  {
    id: 4,
    image: ESPreview,
    title: 'Remote Controlled ESP32 Car Prototype',
    category: 'Personal Project',
    year: '2026',
    description:
      'A fully custom made remote controlled car, built from scratch using an ESP32 microcontroller, with Tb6612fng motor controllers and 3D printed parts.',
    highlights: [
      'Controls are fully custom enabling better control and more complex movement',
      'The firmware for the ESP32 is fully written by me and is therefore completely customizable.',
      'Each part is fully designed in CAD and 3D printed by me.'
    ],
    stack: ['FreeCAD', 'ArduinoIDE', 'Tb6612fng', '130 DC Motors', 'Docker', 'Docker Compose', 'GitHub', 'Git', 'MySQL', 'JavaScript', 'Google Maps']
  },
  {
    id: 5,
    image: DevOpsPreview,
    title: 'DevOps Oriented Web Application',
    category: 'Academic Project',
    year: '2025',
    description:
      'A web application displaying the core philosophies of DevOps and push a small scale deployment as a large scale compnany would.',
    highlights: [
      'UI and CSS was not a priority in this project.',
      'This projected was a public social media esc web aplication for authorised users to post and view videos.',
      'The backend was built with a focus on DevOps and CI/CD, with a fully automated deployment pipeline and monitoring system.',
    ],
    stack: ['JavaScript', 'ReactJS', 'Docker', 'Docker Compose', 'MySQL', 'Git', 'GitHub', 'GitHub Actions', 'Nginx', 'Azure', 'JTest']
  },
   {
    id: 6,
    image: UnityPreview,
    title: 'Unity Game',
    category: 'Personal Project',
    year: '2023',
    description:
      'An idle Unity game, where players have to manage resources to progress through the game.',
    highlights: [
      'All Assets and Sprites were drawn manually by me.',
      'Project was built for Linux and Windows.',
    ],
    stack: ['Unity', 'C#', 'Krita']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>These are my larger scale projects that reflect my technical thinking and practical execution.</h2>
      </div>
      <div>
        <h3>Other smaller scale projects are not included here.</h3>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>

      <div className="project-subsections">
        <div className="project-subsection">
          <p className="eyebrow">My view on AI</p>
          <p>
            In the current landscape of Computer Science, I feel it is important for employers or anyone viewing my page
            to be aware of my stance on AI.

            <br>
            </br>
            AI is an incredible tool for writing code, I know this especially well since I have been a Computer Science student for the last 5 years. However 
            in my eyes it is simpley that, a tool. I dont believe it has yet reached the point of being a "cheatcode", where any stable deployable large scale projects
            can be simply generated and deployed. Not only does it halucinate but from my experience, AI will always follow a specific pattern and will struggle with original and new developments.
            AI is only as good as the people using it, and in the current day I feel like using AI has now become a skill. An individual with Knowledge of software architecture and security, will always produce a
            better product with AI than and inidividual with little to no knowledge. AI does not fill this gap in knowledge yet.
          </p>
        </div>

        <div className="project-subsection">
          <p className="eyebrow">Closing statement</p>
          <p>
            Thank you for viewing my page, I have other projects, but I feel that they are not relavant to employers I am trying to target, however if you would like to discuss them
            or any of my projects shown feel free to contact me. I have purposely made this page quite brief and to the point, If you have thought of any improvements I could make to my portfolio please
            also feel free to contact me. Thanks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;