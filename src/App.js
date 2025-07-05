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
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Testimonial/>
      <Expertise />
      <Clients />
      <Team />
      <Contact />
       <footer
  className="text-center footer-custom"
>
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
