import { useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Testimonial from "./components/Testimonial";
import Expertise from "./components/Expertise";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    function removePreloader() {
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    }

    window.onload = removePreloader;

    // ✅ Fallback in case window.onload never fires (max 3 sec)
    const fallback = setTimeout(removePreloader, 3000);

    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div
        id="preloader"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#520E24",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}
      >
        Loading...
      </div>

      <Navbar />
      <Hero />
      <Mission />
      <Testimonial/>
      <Expertise />
      <Clients />
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
