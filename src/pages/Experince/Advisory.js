import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import expic from "../../assets/img/expic.webp";
import liquid from "../../assets/img/liquid.webp";
import { experience } from "../../constant";
import { useLocation } from 'react-router-dom';

const Advisory = () => {
    let location = useLocation();
    console.log("check",location)
  return (
    <>
      <Header />
      <PageHeader
        pagename="Advisory Services"
        pagelinkname="Advisory Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>Financial Advisory Services</h3>
                <div className="blue-divider"></div>
                <p>
                  Management teams, boards and investors turn to Sherwood
                  Partners to provide deep insight and expertisein advising and
                  addressing the challenges in today's fast-moving economy. We
                  are recognized as 'change'advisors, and our approach is
                  utilizing small teams made up of our highly skilled
                  professional team. Theyhave the necessary expertise that is
                  required to provide solid solutions to meet critical needs,
                  whichhistorically brings proven results for long-term
                  stability.
                </p>
                {/* <p>
                  Since 1992, Sherwood Partners has built a reputation of trust,
                  respect, and quality solutions. We are a full-service
                  consulting and advisory firm focused on assisting companies
                  through transition, transformation, and growth; in this
                  constantly evolving world. Knowledge, and reputation are the
                  keys to your success. GET SHERWOOD!
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={liquid} className="img-fluid" />
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
                  <img src={experience} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>Revitalization</h3>

                <p>
                  In times of rapid change or potential economic uncertainty,
                  companies can benefit by bolstering internalresources with
                  additional experience and skill sets to address dynamic
                  challenges. Sherwood Partnersworks with management, owners and
                  investors to provide the crucial experience to develop
                  andimplement a comprehensive action plan. In a liquidity and
                  time-constrained environment, developing arevitalization plan
                  is key to your success.
                </p>
                <h3>Rejuvenation</h3>
                <p>
                  Sherwood Partners offers a diverse suite of financial and
                  rejuvenation advisory services to companies andtheir
                  stakeholders, who seek trusted advise based on fact-based
                  analytics and experience. Our professionalteam possess
                  extensive experience dealing with the complex issues companies
                  face in today's challengingenvironment.
                </p>

                <h3>Wind-Downs</h3>

                <p>
                  When it comes to wind-downs, our team has extensive experience
                  in dealing with complex issues. Eithera managed wind-down or
                  Assignment for the Benefit of Creditors (ABCs), which is a
                  proven alternativeto bankruptcy, Sherwood Partners understands
                  the options and consequences of each method and has
                  theexperience to guide and implement the process.
                </p>
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

export default Advisory;
