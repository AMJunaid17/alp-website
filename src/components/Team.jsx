import React, { useState } from "react";

export default function Team() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const members = [
    {
      name: "Hasnain Alvi",
      img: "/team/hasnain.png",
      desc:
        "Hasnain Alvi has done B.A LL.B (Hons.) from Hidayatullah National Law university, Raipur, He is the Founder and Managing Partner of the Firm. He has 7 years of experience in the field of General Corporate Advisory and Commercial Litigation and Arbitration, Trademark prosecution and IP Litigation. He specializes in money recovery matters and frequently appears for his clients before High Court in Chhattisgarh and MP, Commercial Court, MSME Councils, Electricity Regulatory commission, Consumer forums through out India, tribunals such as National Company Law Tribunal (NCLTs. NCLAT) all over India. RERA, DRTs and Trademark Registry Mumbai etc.",
      short:
        "Founder and Managing Partner of the firm, with a B.A. LL.B. (Hons.) from HNLU, Raipur."
    },
    {
      name: "Shoaib Alvi",
      img: "/team/shoaib.png",
      desc:
        "Assistant Partner, graduate of Hidayatullah National Law University, Raipur (2019), with a Master’s in Criminal Law from MATS University. Brings 5 years of experience in Commercial Law, White Collar Crime, Criminal Trials, and Consumer Disputes.",
      short:
        "Assistant Partner, graduate of HNLU, Raipur (2019), with a Master’s in Criminal Law from MATS University."
    },
    {
      name: "Sameer Shrivastava",
      img: "/team/sameer.png",
      desc:
        "Sameer Shrivastava is Associate Partner of the Firm. He is Advocate on Record in the Supreme Court of India and frequently appears for our firm in Supreme Court of India, Delhi High Court and all kind of tribunal located in Delhi. Mr. Sameer has extensive experience of more than 12 Years in criminal, bail, matrimonial matters, Insolvency and Bankruptcy matters, Arbitration, white collar crime, handling money laundering PMLA matters.",
      short: "Associate Partner"
    },
    {
      name: "Pradeep Shrivastava",
      img: "/team/pradeep.png",
      desc:
        "Pradeep Shrivastava is Retired District Judge, Advocate and is Senior Partner of the Firm. He has extensive and overall experience of more than 45 Years in the field of civil and criminal litigation. He appears before High Court and District Courts in all kind of civil and criminal matters such as cheque bounce, NDPS Act, Money Laundering, insurance, consumer cases etc. The Firm works under his able guidance and overall supervision.",
      short: "Senior Partner, Retired District Judge with 45+ years of experience"
    }
  ];

  return (
    <section id="team" className="py-5">
      <div className="container">
        <h2
          className="fw-bold mb-5 text-center"
          style={{ color: "#520E24" }}
          data-aos="fade-up"
        >
          OUR TEAM
          <div
            className="border-bottom border-2 border-secondary mt-2"
            style={{ width: "100%", margin: "0 auto" }}
          ></div>
        </h2>

        {members.map((member, idx) => {
          const isExpanded = expanded[idx];

          return (
            <div
              className="row mb-5 align-items-center"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="col-md-2 text-center mb-3 mb-md-0">
                <img
                  src={member.img}
                  alt={member.name}
                  className="img-fluid shadow"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-md-10">
                <h5 className="fw-bold" style={{ color: "#520E24" }}>
                  {member.name}
                </h5>

                {/* Collapsible content wrapper for animation */}
                <div
                  style={{
                    overflow: "hidden",
                    transition: "max-height 0.5s ease",
                    maxHeight: isExpanded ? "500px" : "50px",
                  }}
                >
                  <p
                    className={`mb-2`}
                    style={{
                      color: "#000",
                      marginBottom: "0",
                    }}
                  >
                    {isExpanded ? member.desc : member.short}
                  </p>
                </div>

                {member.desc !== member.short && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="btn btn-sm mt-2"
                    style={{
                      background: "#520E24",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
