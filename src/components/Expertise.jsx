import React from "react";
import { Link } from "react-router-dom";

import { expertiseItems } from "./ExpertiseData";

export default function Expertise() {
  return (
    <section id="expertise" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-5 text-uppercase" style={{ color: "#520E24" }}>
          AREAS OF EXPERTISE
          <div className="border-bottom border-2 border-secondary mb-3"></div>
        </h2>
        <div className="row">
          {expertiseItems.map((item, index) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div
                className="expertise-card p-4 bg-white rounded shadow-sm h-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="expertise-icon">
                  <img src={item.icon} alt={item.title} height="40" />
                </div>
                <h5>{item.title}</h5>
                <Link
                  to={`/expertise/${item.id}`}
                  className="btn read-more-btn mt-3"
                    onClick={() => {
    sessionStorage.setItem(
      'expertiseScrollTop',
      window.scrollY.toString()
    );
  }}
                >
                  READ MORE <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
