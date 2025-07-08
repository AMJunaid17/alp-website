export default function Mission() {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="row align-items-start">
          {/* Left */}
          <div className="col-12 col-lg-3 mb-4 mb-lg-0 text-lg-start">
            <h2 className="display-6 fw-bold lh-1 text-uppercase" style={{ color: '#520E24' }}>
              OUR<br />MISSION
            </h2>
            <div
              className="border-bottom border-2 border-secondary mb-3"
              style={{ display: 'inline-block', width: '100%' }}
            ></div>
            <blockquote className="fst-italic fw-bold mb-0" style={{ fontWeight: 'normal' }}>
              “Justice. Integrity. Results.”
            </blockquote>
          </div>
          {/* Right */}
          <div className="col-12 col-lg-9">
            <p className="lead mb-4" style={{ fontStyle: 'italic' }}>
              Our mission is to provide exceptional legal services to our clients by leveraging our expertise, dedication and a client-centered approach.
            </p>
            <p className="mb-4">
              We are committed to upholding the highest ethical standards and delivering innovative solutions to complex legal challenges. 
              Our goal is to be a trusted advisor to our clients, delivering results with integrity and excellence while upholding the highest standards of professionalism.
            </p>
            <button
              className="btn mx-auto mx-lg-0 d-block d-lg-inline-block px-4 py-2 rounded-0"
              style={{ backgroundColor: '#520E24', color: '#fff' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
