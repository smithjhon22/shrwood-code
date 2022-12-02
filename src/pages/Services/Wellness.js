import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import { experience , cop ,ex } from "../../constant";
import benefit from "../../assets/img/benefit.webp";
import dr from "../../assets/img/health.webp";
import dr2 from "../../assets/img/health.jpg";

const Wellness = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Wellness Reviews" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                {/* <h3>
                  Debt Renegotiations <span> & Restructuring</span>
                </h3> */}
                <h3>
                A Complete Review of Your <span>Company’s Financial Health</span>
                </h3>
                <div className="blue-divider"></div>
                
                <p>
                A financial review is always a good thing. If this is done before or after getting new funding, knowing what the real condition of a company is, can help make you make the right decisions.
                </p>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molesti.
                </p> */}
                <p>Thinking about investing or loaning a company additional funds? As part of the evolution or lifecycle of every company, there comes a point when additional funding may be needed. Before an investment or loan, investors may want an external unbiased view of the health of a company. Sherwood Partners has developed a sophisticated financial review process that gives any company, investor, or board a better understanding of the company’s financial condition. This tool we call, the Sherwood Wellness Review. It is used, prior to making a new investment or loan so that all parties understand the health of a company and have recommendations for any cost savings.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={dr} className="img-fluid" />
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
                  <img src={cop} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                The Corporate State of Health <span>| Wellness Review </span>
                </h3>
                <p>
                The modern business environment has made constant change one of the most important elements to a successful business.  The Sherwood Partners’ Corporate Wellness Review can be very beneficial to the management, investors, and the board to get a better understanding of a company’s wellness. We have deep expertise in finance, operations, accounting, and IP strategy, which can make this wellness review the difference between success and failure.
                </p>
                <p>
                Our complete and thorough analysis, including the evaluation of alternatives, has assisted many of our clients in reaching a well-informed understanding for investment and go-forward decisions. The review is also beneficial for all parties to understand where they are within the “Zone of Insolvency”.
                </p>
                <p>
                Having an independent assessment and understanding the health of your business can be very effective in moving forward with your business plan. Our team is objective and delivers a state-of-health report for your company. We understand that accurate information requires a deep and sophisticated understanding of the business drivers, systems, and application of multiple approaches and methodologies.
                </p>
                <p>
                Knowledge of practical realities in the marketplace and appreciation for the context in which the report is being used is critical and meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

      {/* Key benefit section  */}
      <section className="key-benefit-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="key-benefit-heading">
                <h2>Key Benefits</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of benefit section  */}

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>Know The Status Of Your Company's Financial Overall Health</h3>
                <h3 className="gettingit">
                  <span>Wellness Review</span>
                </h3>
                <div className="blue-divider"></div>
                <h5>
                Know The Status of Your Company's Financial 
                  {/* Overall Health |  */}
                   &nbsp;Wellness Review
                </h5>
                <p>
                All stakeholders of a company benefit from a Wellness Review. We do a deep dive into validating strategies and suggesting changes that can help the decision makers make the right decisions for the company. This thorough evaluation includes assigning organizational wellness metrics and examining the financial health of your company. Our Wellness Review report is both accurate and easy to understand. It offers all parties a complete look at the overall health of an organization. Since 1992, our reputation is delivering quality reports and delivering results. Should the company or investors decide to have Sherwood assist in any suggested changes or implantation, we are there from the start to the end of the implementation process.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={dr2} className="img-fluid" />
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
                  <img src={ex} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Complete Assessment of Your Organization's Performance
                </h3>
                <p>
                If you are serious about enhancing your company’s growth and avoiding bumps along the road, obtaining an independent assessment of its viability might be of great assistance. With the help of our team, you can have a better understanding of the financial health of your company. We deliver a roadmap developed through our deep understanding of business drivers and identify any business pitfalls that can hinder your growth. “Who better than Sherwood Partners, knows what can go wrong?”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                New Financial Strategies to Help Your Organization Grow
                </h3>
                <div className="blue-divider"></div>
               
                <p>
                When you work with Sherwood to create your wellness review, you and all the stakeholders will be able to form better strategies to expand your business and enhance its operations.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={benefit} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}

      {/* Experience sec starts here */}
      {/* <section className="Experience-sec Benefit-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
            <div className="content-wrapper">
                <h3>
                Doing It <span>Right</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molestie, arcu vel ornare dapibus, tortor quam
                  dapibus libero,
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molesti.
                </p>
              </div>
              
            </div>
            <div className="col-lg-6">
             
                 <div className="content-of-benefit">
                     <h3>The <span>Benefits</span></h3>
                     <div className="blue-divider"></div>
                     <div className="benefit-para">
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molestie, arcu vel ornare dapibus, tortor quam dapibus libero,</p>

                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molesti.</p>
                     </div>
                 </div>

            </div>
          </div>
        </div>
      </section> */}
      {/* Experience sec ends here */}

      <Footer />
    </>
  );
};

export default Wellness;
