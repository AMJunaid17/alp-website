import React, { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const contactNumber = form.contactNumber.value.trim();

    if (!/^\d{10}$/.test(contactNumber)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    setLoading(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbx_1EOjRK3tP47e5ozDX-xJ31b0WmWupBu5RfhYEMyDI3Enp0u0NLMywW9Ls1Ux15gHEQ/exec";
    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      // ✅ Nice custom popup
      alert("✅ Thank you! Your message has been sent.");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container-fluid px-4 px-md-5">
        <div className="row g-4">
          {/* 1️⃣ Contact Us Box */}
          <div className="col-md-4">
            <div
              className="p-4 h-100 animate-fade-up"
              style={{
                backgroundColor: "#520E24",
                color: "#fff",
                minHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 className="mb-4">Contact Us</h3>
              <p>
                <i className="bi bi-telephone-fill me-2"></i> +91 91093 71203
              </p>
              <p>
                <i className="bi bi-whatsapp me-2"></i>
                <a
                  href="https://wa.me/919340616763"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    backgroundColor: "#25D366",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  +91 93406 16763{" "}
                  <i className="bi bi-arrow-up-right-circle-fill ms-1"></i>
                </a>
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i> hasnainalvi.hnlu@gmail.com
              </p>
              <p>
                <i className="bi bi-geo-alt-fill me-2"></i> Chamber #317, 3rd Floor, Studio Complex,
                <br />
                Opp. Gurudwara, Shankar Nagar,
                <br />
                District: Raipur
                <br />
                State: Chhattisgarh
                <br />
                Pin Code: 492001
              </p>
            </div>
          </div>

          {/* 2️⃣ Get In Touch Box */}
          <div className="col-md-4">
            <div className="p-4 h-100 border">
              <h3>Get In Touch</h3>
              <form name="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="contactNumber"
                    className="form-control"
                    placeholder="Contact Number (10 digits)"
                    pattern="\d{10}"
                    maxLength={10}
                    minLength={10}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="emailID"
                    className="form-control"
                    placeholder="Email ID"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn text-white w-100"
                  style={{ backgroundColor: "#520E24", borderRadius: 0 }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* 3️⃣ Google Map */}
          <div className="col-md-4">
            <div className="h-100 overflow-hidden animate-fade-up">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=21.25329083299499,81.6623341859221&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
