import { useEffect, useRef } from 'react';

export default function Clients() {
  const logosRef = useRef([]);

  const clientLogos = [
    "/clients/logo1.png",
    "/clients/logo2.png",
    "/clients/logo3.png",
    "/clients/logo4.png",
    "/clients/logo5.png",
    "/clients/logo6.png",
    "/clients/logo7.png",
    "/clients/logo8.png",
    "/clients/logo9.png",
    "/clients/logo10.png",
    "/clients/logo11.png",
  ];

  useEffect(() => {
    const observers = [];

    logosRef.current.forEach((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('fade-up');
          }
        },
        { threshold: 0.1 }
      );

      if (el) observer.observe(el);
      observers.push(observer);
    });

    const handleClientsNavClick = () => {
      logosRef.current.forEach((el) => {
        if (el) {
          el.classList.remove('fade-up');
          // Force reflow to restart the animation
          void el.offsetWidth;
          el.classList.add('fade-up');
        }
      });
    };

    window.addEventListener('clientsNavClicked', handleClientsNavClick);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener('clientsNavClicked', handleClientsNavClick);
    };
  }, []);

  return (
    <section id="clients" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: "#520E24" }}>
          OUR CLIENTS
          <div
            className="border-bottom border-2 border-secondary mb-3"
            style={{ display: "inline-block", width: "100%" }}
          ></div>
        </h2>

        <div className="row justify-content-center">
          {clientLogos.map((logo, index) => (
            <div
              className="col-6 col-md-4 col-lg-3 mb-4 d-flex align-items-center justify-content-center"
              key={index}
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                ref={(el) => (logosRef.current[index] = el)}
                className="img-fluid client-logo"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          .client-logo {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
          }

          .client-logo.fade-up {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </section>
  );
}
