import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBlogsBadge, setShowBlogsBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (section) => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('mainNav');

    if (section === 'blogs') {
      setShowBlogsBadge(true);
      setTimeout(() => {
        setShowBlogsBadge(false);
      }, 3000); // hide after 3 sec
      return;
    }

      if (section === 'clients') {
      window.dispatchEvent(new Event('clientsNavClicked'));
    }

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'shadow-sm' : ''}`}
      style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)',
        backdropFilter: scrolled ? 'none' : 'blur(2px)',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div className="container">
        <a href="/" className={`navbar-brand d-lg-none ${scrolled ? 'scrolled-logo' : ''}`}>
          <img src="/logo.png" alt="ALP Logo" height="40" />
          <span className="ms-2 fs-6">Alvi Law Partners</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="mainNav">
          <ul className="navbar-nav nav-justified w-100">
            {['hero', 'expertise', 'clients', 'team', 'blogs', 'contact'].map((section, index) => (
              <li key={index} className="nav-item position-relative">
                <Link
                  activeClass="active"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  onClick={() => handleNavLinkClick(section)}
                  className="nav-link text-white custom-nav-link"
                  style={section === 'blogs' ? { cursor: 'pointer' } : {}}
                >
                  {section === 'hero' && 'Home'}
                  {section === 'expertise' && 'Expertise'}
                  {section === 'clients' && 'Clients'}
                  {section === 'team' && 'About Us'}
                  {section === 'blogs' && 'Blogs'}
                  {section === 'contact' && 'Contact Us'}
                </Link>

                {/* Show badge below Blogs link */}
                {section === 'blogs' && showBlogsBadge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#520E24',
                      color: '#fff',
                      padding: '4px 10px',
                      fontSize: '0.8rem',
                      borderRadius: '4px',
                      marginTop: '4px',
                      whiteSpace: 'nowrap',
                      zIndex: 99,
                    }}
                  >
                    Coming soon!
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
