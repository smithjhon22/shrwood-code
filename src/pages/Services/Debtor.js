import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import debtorss from "../../assets/img/debtorss.webp";
import handsonme from "../../assets/img/handsonme.webp";

const Debtor = () => {
  return (
    <>
      <Header />
      <PageHeader
        pagename="Debtor And Creditor Representation"
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Creditor <span>Committee Advisors </span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                When insolvent companies enter a formal Chapter 11 bankruptcy filing, surprises abound, and disputes develop. A Creditor Committee is formed to represent their collective rights, and the investigation process begins while developing financial strategies.
                </p>
                <p>
                We advise the Creditors Committee throughout the bankruptcy proceedings as their financial advisor and/or sales agent in confirming facts and collecting, analyzing, assimilating information and monetizing the assets
                </p>

                <p>
                There are many benefits in retaining an experienced independent third party to provide financial advice as well as develop a strategy. Retaining the services of Sherwood Partners gives the Creditor Committee a unique advantage. We offer expertise, reliability, speed, and excellent coordination and communication with the committee. We offer realistic assessments and practical advice, and most importantly, guidance in monetizing intangible assets that can deliver the best financial returns to the committee. With these tools, the Creditor Committee is in a better position to effectively evaluate the entire portfolio of the company's assets and act decisively.
                </p>

                <p>
                Furthermore, if IP is involved, we have the expertise and deep relationships to the IP buying community to work towards the best outcome. We have the experience and relationships to undertake sales and licensing opportunities, lending against or purchasing patents, trademarks, copyrights, trade secrets and know-how.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={debtorss} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}

      {/* Experience sec starts here */}
      <section className="Experience-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper">
                <figure>
                  <img src={handsonme} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                How We <span>Help</span>
                </h3>
                <p>
                As an advisor to the Creditor Committees, Sherwood Partners performs a wide variety of functions while working with the debtor for:
                </p>
                <ul className="how-ul">
                  <li>
                  Forensic investigation into paper trails of the financial books, corporate records, and documented agreements, assessment of facts and priorities, and analysis of the IP portfolio
                  </li>
                  <li>
                  Debriefing employees and the management teams on the intricacies of specific transactions, operations, and potential opportunities
                  </li>
                  <li>
                  Recommending changes for success with restructuring, if feasible
                  </li>
                  <li>
                  Monitoring the business’ progress within the implemented plan
                  </li>
                  <li>
                  Exploring other monetization opportunities of hard assets and intellectual property
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

      <Footer />
    </>
  );
};
export default Debtor;
