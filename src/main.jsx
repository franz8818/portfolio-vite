import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.jsx';
import Navbar from './components/navbar.jsx';
import Proyects from './components/proyects.jsx';
import Cv from './components/cv.jsx';
import W2d from './components/proyectW2d.jsx';
import StarWarsP from './components/starwarsProyect.jsx';
import StarWarsRest from './components/starwarsRestApi.jsx';
import Geeks from './components/geeks.jsx';
import Sena from './components/sena.jsx';
import Techs from './components/techs.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import './styles/styles.css';
import './styles/media.css';
import './styles/common.css';
import './styles/colors.css';

const MainContent = () => {
  const location = useLocation();
  const [showGoTopButton, setShowGoTopButton] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowGoTopButton(true);
      } else {
        setShowGoTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location.state]);

  const handleGoTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container text-center">
      <App />
      <div id="proyects-section">
        <Proyects />
      </div>
      <Techs />
      <div id="contact-section">
        <Contact />
      </div>
      {showGoTopButton && (
        <button id="goTopButton" onClick={handleGoTopClick}>
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
};

const Main = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/proyectW2d" element={<W2d />} />
          <Route path="/starwarsProyect" element={<StarWarsP />} />
          <Route path="/starwarsRestApi" element={<StarWarsRest />} />
          <Route path="/geeks" element={<Geeks />} />
          <Route path="/sena" element={<Sena />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
