import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-4">
          {/* 1️⃣ Contact Us Box */}
          <div className="col-md-6">
            <div
              className="p-5 h-100 animate-fade-up"
              style={{
                backgroundColor: "#520E24",
                color: "#fff",
                minHeight: "400px",
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
                    backgroundColor: "#25D366", // WhatsApp green
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#1ebe5b";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#25D366";
                    e.target.style.color = "#fff";
                  }}
                >
                  +91 93406 16763 <i className="bi bi-arrow-up-right-circle-fill ms-1"></i>
                </a>

              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>{" "}
                hasnainalvi.hnlu@gmail.com
              </p>
              <p>
                <i className="bi bi-geo-alt-fill me-2"></i> Chamber #317, 3rd
                Floor, Studio Complex,<br />
                Opp. Gurudwara, Shankar Nagar,<br />
                District: Raipur <br />
                State: Chhattisgarh <br />
                Pin Code: 492001
              </p>
            </div>
          </div>

          {/* 2️⃣ Google Map */}
          <div className="col-md-6">
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
