export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100 position-relative"
      style={{
        paddingTop: '80px',
        backgroundImage: "url('/bookshelf.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        // ✅ Remove fixed for mobile here:
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="position-relative z-1 d-flex flex-column align-items-center justify-content-center h-100">
        <img
          src="/logo.png"
          alt="ALP logo"
          className="mb-3 hero-logo"
          style={{ maxWidth: '150px', width: '20%' }}
        />
        <h1 className="display-4 text-white hero-title">ALVI LAW PARTNERS</h1>
        <p className="lead text-white hero-subtitle">Advocates & Solicitors</p>

        {/* Scroll indicator
        <div className="scroll-indicator mt-4">
          <span className="text-white fs-2">&#8595;</span>
        </div> */}
      </div>
    </section>
  );
}
