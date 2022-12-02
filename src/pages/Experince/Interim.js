import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import expic from "../../assets/img/expic.webp";
import liquid from "../../assets/img/liquid.webp";
import { experience } from "../../constant";

const Interim = () => {
  return (
    <>
      <Header />
      <PageHeader
        pagename="Interim Management"
        pagelinkname="Interim Management"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
 
                <h3>Interim Management and Management Augmentation</h3>
                <div className="blue-divider"></div>
                <p>
                  Sherwood Partners provides an experienced team to assume or
                  augment a management role on an interimbasis as the need
                  arises. Our seasoned professionals work with the Company's
                  executives, teams as wellas theboard, when appropriate. We
                  build a strategic and focused turnaround and restructuring
                  solutions.
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
                <h3>
                  Our Experience And Reputation <span>Bring Results</span>
                </h3>
                
                <p>
                  We establish clear and attainable goals, as well as provide a
                  focus for a strong future.Our team has extensive experience
                  serving or augmenting senior executive roles in a variety of
                  industries.The Sherwood Edge is that our team focuses on
                  yesterday’s problems that create today’s situation andyour
                  team can focus on the continued growth of a company . This is
                  the Sherwood EdgeYour Success is Our Success. GET SHERWOOD
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

export default Interim;
