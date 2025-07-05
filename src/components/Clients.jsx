export default function Clients() {
  return (
    <section id="clients" className="py-5 text-center">
      <div className="container">
        <h2
          className="fw-bold mb-5"
          style={{ color: "#520E24" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          OUR CLIENTS
          <div
            className="border-bottom border-2 border-secondary mb-3"
            style={{ display: "inline-block", width: "100%" }}
          ></div>
        </h2>

        <img
          src="/Clients.png"
          alt="Our Clients"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        />
      </div>
    </section>
  );
}
