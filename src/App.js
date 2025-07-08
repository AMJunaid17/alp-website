import { useState, useEffect } from 'react';
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

export default function App() {
  const [clientsKey, setClientsKey] = useState(0);
   useEffect(() => {
    const handler = () => {
      setClientsKey((prev) => prev + 1); // change key forces re-mount
    };
    window.addEventListener('clientsNavClicked', handler);
    return () => window.removeEventListener('clientsNavClicked', handler);
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
      <footer className="text-center footer-custom">
        <div className="container">
          <p className="mb-1">© 2025 Alvi Law Partners | All rights reserved.</p>
          <div>
            <a href="/terms" className="footer-link">Terms & Conditions</a> &nbsp; | &nbsp;
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
