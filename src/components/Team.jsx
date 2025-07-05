export default function Team() {
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

        {[
          {
            name: "Hasnain Alvi",
            img: "/team/hasnain.png",
            desc:
              "Founder and Managing Partner of the firm, with a B.A. LL.B. (Hons.) from HNLU, Raipur. Backed by 10+ years of experience, he specializes in Corporate Advisory, Commercial & IP Litigation, Arbitration, and Money Recovery. He appears regularly before High Courts, Commercial Courts, and key tribunals like NCLT, NCLAT, RERA, DRTs, and the Trademark Registry across India.",
          },
          {
            name: "Shoaib Alvi",
            img: "/team/shoaib.png",
            desc:
              "Assistant Partner, graduate of Hidayatullah National Law University, Raipur (2019), with a Master’s in Criminal Law from MATS University. Brings 5 years of experience in Commercial Law, White Collar Crime, Criminal Trials, and Consumer Disputes.",
          },
          {
            name: "Sameer Shrivastava",
            img: "/team/sameer.png",
            desc:
              "Associate Partner, Advocate on Record at the Supreme Court with 12+ years in criminal law, arbitration, insolvency, and PMLA cases.",
          },
          {
            name: "Pradeep Shrivastava",
            img: "/team/pradeep.png",
            desc:
              "Senior Partner, Retired District Judge with 45+ years of experience in civil and criminal litigation across High Courts and District Courts.",
          },
        ].map((member, idx) => (
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
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-10">
              <h5 className="fw-bold" style={{ color: "#520E24" }}>
                {member.name}
              </h5>
              <p className="text-secondary mb-0">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
