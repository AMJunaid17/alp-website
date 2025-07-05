export default function TestimonialSection() {
  return (
    <section className="position-relative container my-5">
      {/* Desktop Layout */}
      <div className="d-none d-md-block position-relative">
        {/* Maroon block */}
        <div
          className="position-absolute top-0 end-0 h-100"
          style={{
            width: "52%", // Maroon block is bigger
            backgroundColor: "#520E24",
            zIndex: 1,
          }}
        ></div>

        {/* Image & text container */}
        <div className="d-flex align-items-center position-relative">
          {/* Image stays the same */}
          <div style={{ zIndex: 0.4 }}>
            <img
              src="/testimonial.jpg"
              alt="Hands"
              className="img-fluid"
              style={{ width: "100%" }}
            />
          </div>

          {/* Headline with animation */}
          <h2
            className="position-absolute fw-bold text-white"
            style={{
              left: "35%",
              top: "40%",
              transform: "translateY(-50%)",
              zIndex: 3,
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            "Your trust, our foundation"
          </h2>

          {/* Quote text with animation */}
          <div
            className="position-absolute text-white"
            style={{
              right: "10%",
              bottom: "15%",
              maxWidth: "35%",
              zIndex: 3,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <div
              style={{
                position: "absolute",
                top: "-2rem",
                left: "-2rem",
                fontSize: "4rem",
                lineHeight: "1",
              }}
            >
              &ldquo;
            </div>
            <p className="fst-italic mb-0">
              Our goal is to be a trusted advisor to our clients, delivering
              results with integrity and excellence while upholding the highest
              standards of professionalism.
            </p>
            <div
              style={{
                position: "absolute",
                bottom: "-2rem",
                right: "-1rem",
                fontSize: "4rem",
                lineHeight: "1",
              }}
            >
              &rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="d-block d-md-none">
        <img src="/testimonial.jpg" alt="Hands" className="img-fluid mb-3" />

        {/* Headline with fade-up */}
        <h2
          className="fw-bold mb-3 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          "Your trust, our foundation"
        </h2>

        <div
          className="text-white p-4"
          style={{ backgroundColor: "#520E24" }}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          <p className="fst-italic mb-0">
            Our goal is to be a trusted advisor to our clients, delivering
            results with integrity and excellence while upholding the highest
            standards of professionalism.
          </p>
        </div>
      </div>
    </section>
  );
}
