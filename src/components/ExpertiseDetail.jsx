import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { expertiseItems } from "./ExpertiseData";

export default function ExpertiseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = expertiseItems.find((i) => i.id === id);
  if (!item) return <div>Expertise not found.</div>;
  

  return (
    <section className="expertise-detail-section position-relative w-100">
      {/* ======== Desktop Layout ======== */}
      <div className="d-none d-md-block position-relative split-hero">
         <div className="maroon-block position-absolute top-0 end-0 h-100"></div>
       <div className="image-container">
    {/* Full-width image */}
    <img
      src={item.modalImage}
      alt={item.modalTitle}
      className="w-100 h-100 object-cover"
    />
  </div>
        {/* Back button */}
        <button
  onClick={() => navigate(-1)}
  className="modal-back-btn position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1"
>
  Go Back
</button>


        {/* Headline over image */}
        <div
          className="position-absolute text-white text-end headline-overlay"
          style={{
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "40%",
          }}
        >
            <h1 style={{
    fontSize: "3.5rem",  // increase as needed
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0
  }}>{item.modalTitle}</h1>
        </div>
      </div>

      {/* ======== Mobile Layout ======== */}
      <div className="d-block d-md-none">
        <img
          src={item.modalImage}
          alt={item.modalTitle}
          className="img-fluid mb-3"
        />
        <button
          onClick={() => navigate(-1)}
          className="btn mb-3 ms-3 rounded-pill px-3 py-1"
          style={{
            background: "#fff",
            color: "#520E24",
            border: "1px solid #520E24",
          }}
        >
          Go Back
        </button>
        <h1 className="fw-bold mb-3 px-3">{item.modalTitle}</h1>
      </div>

      {/* ======== Common Text Content ======== */}
      <div className="container px-3 px-md-0 my-4">
        {item.modalContent.map((p, idx) => (
          <p key={idx} className="mb-3">{p}</p>
        ))}

        {item.services?.length > 0 && (
          <>
            <h5 className="fw-bold mt-4">Our Services include:-</h5>
            <ul>
              {item.services.map((s, idx) => (
                <li key={idx} className="mb-2">{s}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
