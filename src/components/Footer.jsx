export default function Footer() {
  return (
    <footer className="footer text-white py-5">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img src="/logo.png" alt="ALP Logo" height="50" className="mb-2" />
            <p className="small">Alvi Law Partners<br />Advocates & Solicitors</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#team" className="footer-link">About Us</a></li>
              <li><a href="#expertise" className="footer-link">Expertise</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="mb-3">Contact Us</h5>
            <p className="small mb-1">📞 +91 91093 71203</p>
            <p className="small mb-1">✉️ hasnainalvi.hnlu@gmail.com</p>
            <p className="small mb-0">📍 Chamber #317, Studio Complex, Raipur, Chhattisgarh</p>
          </div>
        </div>

        <div className="mt-4 border-top pt-3 text-center small">
          © {new Date().getFullYear()} Alvi Law Partners | All rights reserved.
        </div>
      </div>
    </footer>
  );
}
