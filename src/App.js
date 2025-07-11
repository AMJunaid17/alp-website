import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Disclaimer from './components/Disclaimer';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Testimonial from "./components/Testimonial";
import Expertise from "./components/Expertise";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Contact from "./components/Contact";

import ExpertiseDetail from "./components/ExpertiseDetail";
// import ScrollToTop from "./components/ScrollToTop";

function Home({ clientsKey }) {
  useEffect(() => {
    const saved = sessionStorage.getItem("expertiseScrollTop");
    if (saved) {
      window.scrollTo(0, parseInt(saved));
      sessionStorage.removeItem("expertiseScrollTop");
    }
  }, []);
  return (
    <>
      <Disclaimer />
      <Navbar />
      <Hero />
      <Mission />
      <Testimonial />
      <Expertise />
      <Clients key={clientsKey} />
      <Team />
      <Contact />
    </>
  );
}

export default function App() {
  const [clientsKey, setClientsKey] = useState(0);

  useEffect(() => {
    const handler = () => {
      setClientsKey((prev) => prev + 1);
    };
    window.addEventListener('clientsNavClicked', handler);
    return () => window.removeEventListener('clientsNavClicked', handler);
  }, []);

  return (
    <Router>
      {/* <ScrollToTop /> 👈 important! */}
      <div className="app-wrapper">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home clientsKey={clientsKey} />} />
            <Route path="/expertise/:id" element={<ExpertiseDetail />} />
          </Routes>
        </main>
        <footer className="text-center footer-custom">
          <div className="container">
            <p className="mb-1">© 2025 Alvi Law Partners | All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
