import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;