import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container className="about-section">
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <img 
            src="./Images/Me1.jpeg" 
            alt="Profile Picture" 
            style={{ 
              maxWidth: '40%', 
              height: 'auto', 
              borderRadius: '50%', 
              display: 'block', 
              margin: '0 auto' 
            }} 
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with experience in creating modern web applications.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;