import React from 'react';

const AboutMe = () => {
  const skills = [
    {
      title: 'Specialised University Modules',
      items: ['Quantum Computing', 'Distributed Systems', 'DevOps', 'AI and Machine Learning', 'Security']
    },
    {
      title: 'Core Computer Science Skills',
      items: ['Problem Solving', 'Communication', 'Abstraction', 'Teamwork', 'Fast Learner']
    }
  ];

  return (
    <section id="about" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Masters in Computer Science Newcastle University • Software Developer</p>
        <h1>Aspiring Software Engineer, with an ever growing skill set and a drive to put myself in industry.</h1>
        <p className="lead">
          I&apos;m Paritosh, a computer science student of Newcastle Univserity, with a passion for all things computer related. 
          Wether it be robotics, embedded/operating systems, distributed systems, web applications or stand alone applications, I&apos;ve always been
          fascinated by software. My fascination also extends to hardware, which has led to my interests with low level programming.
        </p>

        <div className="cta-row">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Get in Touch</a>
        </div>

        <ul className="quick-facts" aria-label="Portfolio highlights">
          <li>
            <strong>4+</strong>
            <span>Years building</span>
          </li>
          <li>
            <strong>10+</strong>
            <span>Technical projects</span>
          </li>
        </ul>
      </div>

      <div className="hero-visual">
        <div className="profile-card">
          <img src="/Images/SelfPortrait.jpg" alt="Paritosh Appaya portrait" />
        </div>
        <div className="floating-badge">
          <span className="badge-number">CS</span>
          <span>Problem solver</span>
        </div>
      </div>

      <div className="section-shell about-grid" style={{ gridColumn: '1 / -1' }}>
        <div className="about-panel">
          <p className="eyebrow">About me</p>
          <p>
            I&apos;m someone who loves to understand the fundementals of how systems work, after learning high level
            programming at a young age, I was not satisfied with simple explanations such as "it just works", but rather 
            wanted to understand the underlying principles of how programs physically run using the processor and memory.
            <br />
            <br />
            I'm also someone who enjoys problem solving, the very nature of low level programming involes an incresible 
            amount of problem solving and abstraction, which I have always found amazing. I like to think one of my strengths is 
            my unorthodox approach when it comes to problem solving, especially when it comes to problems with limited resources.
            
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skillGroup) => (
            <div className="skill-card" key={skillGroup.title}>
              <h3>{skillGroup.title}</h3>
              <ul>
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;