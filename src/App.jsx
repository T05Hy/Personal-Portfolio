import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <AboutMe />
      <main style={mainStyle}>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

const appStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#282c34',
  color: '#fff'
};

const mainStyle = {
  flex: 1,
  padding: '2rem'
};

export default App;