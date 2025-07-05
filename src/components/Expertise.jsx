import React, { useState } from "react";
import { Modal } from "react-bootstrap";

// ✅ Reusable data for cards and modals:
const expertiseItems = [
  {
    id: "arbitration",
    icon: "/icons/arbitration.png",
    title: "Arbitration and Dispute Resolution",
    modalImage: "/Arbitrationdetail.png",
    modalTitle: "Arbitration & Dispute Resolution",
    modalContent: [
      "Arbitration and dispute resolution are alternative methods of resolving disputes outside of the traditional court system.",
      "Arbitration is a form of alternative dispute resolution where a neutral third-party (the arbitrator) hears evidence and makes a binding decision to resolve the dispute. This process is usually quicker, more private and less formal than going to court. As per the latest amendments Arbitrations are to be completed within in a time bound manner which is 1 year whichcanbefurtherextendedby sixmonths.",
      "Dispute resolution refers to a broader category of processes used to resolve conflicts, which may include negotiation, mediation, and arbitration, as well as litigation. The objective of dispute resolution is to resolve conflicts in a timely, cost-effective and efficient manner. Overall, ADR can be a valuable option for resolving disputes , and increasingly being used by individuals, businesses, organizations as a way to resolve conflicts effectively and efficiently."
    ],
    services: [
      "Drafting and reviewing arbitration clauses",
      "Providing detailed opinions and advice",
      "Mediation & Conciliation",
      "Representing Client before the Arbitrator"
    ]
  },
  {
    id: "commercial",
    icon: "/icons/commercial.png",
    title: "Commercial Litigation in Commercial Courts",
    modalImage: "/Commercial.png",
    modalTitle: "Commercial Litigation in Commercial Courts",
    modalContent: [
      "Commercial litigation refers to legal disputes between businesses or between a business and an individual that arise in the course of commercial transactions. Commercial litigation can involve a wide range of legal issues, including contract disputes, business torts, and intellectual property disputes. Commercial courts are specialized courts that handle commercial disputes, including those arising from commercial transactions and business relationships in a time bound manner.",
      "Commercial Court Raipur is one of the first commercial courts established in the year 2015  when the Commercial Courts Act came into effect."
    ],
    services: [
      "Our commercial litigation practice focuses on resolving complex legal disputes that arise in the commercial context. Our experienced attorneys have a deep understanding of commercial law and a proven track record of success in commercial courts. We represent clients in a wide range of commercial disputes, from contract disputes to business torts and intellectual property disputes.",
      "With a focus on achieving efficient and effective solutions for our clients, our team is dedicated to navigating the complexities of commercial litigation and delivering successful outcomes in commercial court."
    ]
  },
  {
    id: "insolvency",
    icon: "/icons/insolvency.png",
    title: "Insolvency and Bankruptcy Matters",
    modalImage: "/insolvency.png",
    modalTitle: "Insolvency and Bankruptcy Matters",
    modalContent: [
      "Insolvency and Bankruptcy Practice</strong><br/>Our experienced attorneys provide comprehensive legal representation under the Indian Insolvency and Bankruptcy Code (IBC) 2016. We handle complex insolvency proceedings, winding-up petitions, and asset recovery matters, representing clients before National Company Law Tribunal (NCLTs) throughout India.",
      "Our team provides strategic guidance through these complex proceedings while ensuring compliance with both IBC and Companies Act provisions. We leverage our extensive experience to deliver optimal outcomes for our clients in matters before NCLTs across jurisdictions."
    ],
    services: [
      "NCLT Corporate Litigation: Our practice covers various corporate disputes before the NCLT including: Strike-Off Company Matters Representation in restoration applications for wrongfully struck-off companies Appeals for company restoration within the statutory period.",
      "Shareholder Disputes: Resolution of disputes between majority and minority shareholders Protection of shareholder rights and interests Intervention applications by directors and shareholders.",
      "Oppression and Mismanagement: Filing and defending petitions under Sections 241-242 of Companies Act  2013, Interim relief applications during pending proceedings, resolution of management deadlocks and corporate governance issues, protecting minority shareholder interests against majority oppression."
    ]
  },
   {
    id: "cheque",
    icon: "/icons/Cheque.png",
    title: "Cheque Dishonour Cases",
    modalImage: "/Cheque.png",
    modalTitle: "Cheque Dishonour Cases",
    modalContent: [
      "Our cheque bounce practice provides comprehensive legal representation for individuals and businesses facing cheque dishonour or bounce charges.",
      
    ],
    services: [
      "Our experienced attorneys have a deep understanding of cheque bounce laws and a proven track record of success in resolving these types of legal disputes. Whether you are facing a criminal case for cheque bounce or seeking to recover damages from a bounced check, our team is dedicated to protecting your rights and pursuing the best possible outcome for your case.",
     
    ]
  },
  {
    id: "trademark",
    icon: "/icons/Trademark.png",
    title: "Trademark Prosecution and Litigation",
    modalImage: "/Trademark.png",
    modalTitle: "Trademark Prosecution and Litigation",
    modalContent: [
      "We specialise in trademark registration, prosecution and litigation. We regularly handle and provide legal services related to the registration, protection, and enforcement of our client’s trademarks/copyrights.",
      "We assist clients in obtaining trademark registration and help defend against any challenges to their trademark rights before Trademark Registry and the Courts to protect and maintain the integrity of their brands."
    ],
    services: [
      "Trademark Search and Clearance",
      "Trademark Licensing, Transfer & Assignment",
      "Trademark Litigation",
      "IP Counseling",
      "IP Due Diligence",
      "Trademark Strategy and Planning"
    ]
  },
  {
    id: "realestate",
    icon: "/icons/Real.png",
    title: "Real Estate Disputes",
    modalImage: "/Cheque.png",
    modalTitle: "Real Estate Disputes",
    modalContent: [
      "RERA stands for the Real Estate (Regulation and Development) Act, which is an Indian legislation aimed at regulating and promoting the real estate sector in India.",
      "RERA provides a framework for the regulation of the real estate industry, including the registration of real estate projects, protection of the interests of consumers, and the resolution of disputes arising from real estate transactions."
    ],
    services: [
      "Our real estate practice includes expertise in the Real Estate (Regulation and Development) Act (RERA). Our attorneys have a thorough understanding of the RERA framework and are well-equipped to advise clients on a wide range of real estate matters , from project registration to dispute resolution. Whether you are a developer, investor, or property owner, our team is dedicated to providing effective and efficient legal solutions to meet your RERA-related needs, requiring representation before wide varieties of forums including but not limited to NCLTs , RERA ,Consumer forums etc."
    ]
  },
  {
    id: "contract",
    icon: "/icons/Contract.png",
    title: "Contract Drafting & Management",
    modalImage: "/Cheque.png",
    modalTitle: "Contract Drafting & Management",
    modalContent: [
      "We work closely with our clients to understand their specific needs and goals, and provide customized solutions that meet those needs. Effective contract management can help clients minimize legal risks, improve relationships with partners and vendors, and achieve business objectives.",
      "We have strong understanding of the Contract Law as well as the relevant laws and regulations that apply to specific industry. We regularly assist Our Clients in preparing contracts that are legally binding, enforceable and aligned with the needs and goals of the Parties involved."
    ],
    services: [
      "Contract drafting",
      "Contract review",
      "Contract negotiation",
      "Contract administration",
      "Contract dispute resolution"
    ]
  },
  {
    id: "consumer",
    icon: "/icons/Consumer.png",
    title: "Consumer Cases",
    modalImage: "/Cheque.png",
    modalTitle: "Consumer Cases",
    modalContent: [
      "Our experienced</strong> attorneys have a deep understanding of consumer protection laws and a proven track record of success in representing clients in a variety of consumer law disputes. Whether you are an individual seeking to resolve a consumer issue or a business facing a consumer protection lawsuit, our team has the knowledge and expertise to guide you through the legal process and achieve a favorable outcome. We regularly advise and strategize the cases of our clients in consumer matters and appear before all kind forums/consumer commissions at all levels starting from district level to national level and the apex court."
    ],
    services: []
  },
  {
    id: "competition",
    icon: "/icons/Competition.png",
    title: "Competition Law",
    modalImage: "/Cheque.png",
    modalTitle: "Competition Law",
    modalContent: [
      "Competition law, also known as antitrust law, is a set of laws and regulations aimed at promoting fair competition and preventing anti-competitive behavior.",
      "In India, the Competition Act, 2002 governs competition law and the functioning of the Competition Commission of India."
    ],
    services: [
      "Competition law investigation and compliance",
      "Merger control advisory",
      "Enforcement of rights under competition law"
    ]
  }
];

export default function Expertise() {
  const [selectedExpertise, setSelectedExpertise] = useState(null);

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
                onClick={() => setSelectedExpertise(item.id)}
              >
                <div className="expertise-icon">
                  <img src={item.icon} alt={item.title} height="40" />
                </div>
                <h5>{item.title}</h5>
                <button className="btn read-more-btn mt-3">
                  READ MORE <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Unified dynamic Modal */}
      <Modal
        show={selectedExpertise !== null}
        onHide={() => setSelectedExpertise(null)}
        size="xl"
        centered
        dialogClassName="border-0"
      >
        <div
          style={{
            border: "none",
            borderRadius: 0,
            overflow: "hidden",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Modal.Body className="p-0">
            {selectedExpertise && (() => {
              const item = expertiseItems.find(i => i.id === selectedExpertise);
              if (!item) return null;

              return (
                <div className="row g-0">
                  <div className="col-md-6 position-relative">
                    <img
                      src={item.modalImage}
                      alt={item.modalTitle}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                    <button
                    className="btn position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1"
                    style={{
                      backgroundColor: "white",
                      color: "#520E24",
                      border: "1px solid #520E24",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#520E24";
                      e.target.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = "#520E24";
                    }}
                    onClick={() => setSelectedExpertise(null)}
                  >
                    Go Back
                  </button>
                  </div>
                  <div
                    className="col-md-6 p-4 d-flex flex-column"
                    style={{ overflowY: "auto", height: "100%" }}
                  >
                    <h2 className="fw-bold mb-3 border-start ps-3 border-4 border-dark">
                      {item.modalTitle}
                    </h2>
                    {item.modalContent.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                    {item.services?.length > 0 && (
                      <>
                        <p className="fw-bold mb-1">Our Services include:-</p>
                        <div className="border-bottom border-2 border-secondary mb-3"></div>
                        <ul className="ps-3 mb-0">
                          {item.services.map((s, idx) => (
                            <li key={idx}>{s}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              );
            })()}
          </Modal.Body>
        </div>
      </Modal>
    </section>
  );
}
