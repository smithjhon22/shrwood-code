import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import benefit from "../../assets/img/benefit.webp";
import { experience } from "../../constant";
import handshake from "../../assets/img/handshake.webp";
import mlq from "../../assets/img/mlq.webp";

const Manageliquid = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Managed Liquidations" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                  Managed <span> Liquidations</span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                  A Managed Liquidation can be an alternative solution while
                  winding down a business operation when corporate operations
                  are relatively straightforward, and the balance sheet is not
                  overly burdened with complicated debt arrangements. In such
                  cases, a Managed Liquidation can be more attractive than a
                  formal bankruptcy filing or Assignment for the Benefit of
                  Creditors (ABCs). This may also be an alternative when an
                  owner or board decides the company has run its course and it
                  is time to close. We take care of every element of the
                  liquidation. From winding down the company, collecting the
                  receivables, monetizing the assets, and then finally making
                  the distribution. This is also where Sherwood Partners can act
                  as the Liquidating Trust Agent.
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
      <section className="Experience-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper">
                <figure>
                  <img src={handshake} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                  We Simplify the <span>Liquidation Process</span>
                </h3>
                <p>
                  Our goal is to simplify the process of liquidation and
                  maximize the assets. Our process usually brings a higher value
                  for the estate.
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
                  ABC versus Managed Liquidation
                  {/* <span>of Creditors</span> */}
                </h3>
                <div className="blue-divider"></div>
                <p>
                  The concept of Managed Liquidations is similar to an
                  Assignment for the Benefit of Creditors (ABCs), with the
                  exception that it is not a legally outlined process.
                  Therefore, you may not get the same level of protection from
                  creditors. However, in the proper circumstances, these
                  liquidations can be an optimal solution.
                </p>

                <h3>We Bring Calm to Your Chaos</h3>
                <p>
                  By methodically and efficiently tackling the key stress points
                  and stabilizing the company's main assets, Sherwood Partners
                  can provide an orderly process for wrapping up the corporate
                  operations and efficiently monetizing all assets.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={mlq} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}

      {/* Experience sec starts here */}
      {/* <section className="Experience-sec">
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
          </div>
        </div>
      </section> */}
      {/* Experience sec ends here */}

      {/* Experience sec starts here */}
      <section className="Experience-sec Benefit-sec manage-liquid-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="content-wrapper for-blue-line">
                <h3>
                  Our Managed Liquidation <span>Services</span>
                </h3>
                <div className="blue-divider"></div>
                {/* <p>
                  Assess the overall situation, identifying key assets,
                  employees, and issues Immediately establish a plan to stabilize
                  the Company by protecting principal assets, employee knowledge,
                  and financial condition Instituting processes to monetize
                  company assets and settle financial obligations
                </p>
                <p>
                  Collect any receivables Negotiate asset sales and creditor
                  payments Finalize all remaining business affairs relating to
                  the Company Exit the facility, when necessary so that the
                  entire liquidation can be finalized
                </p> */}
                <ul className="liquid-ul for-show-style-dots">
                  <li>Assessing the overall situation</li>
                  <li>Identifying key assets, employees, and issues</li>
                  <li>
                    Immediately establishing a plan to stabilize the company by
                    protecting principal assets, employee knowledge, and
                    financial conditions
                  </li>
                  <li>
                    Winding down the company Instituting processes to monetize
                    company assets and settling financial obligations
                  </li>
                  <li>Collecting any receivables</li>
                  <li>Negotiating asset sales and creditor payments</li>
                  <li>Finalizing all remaining business affairs relating to the company</li>
                  <li>Exiting the facility when necessary, so the entire liquidation can be finalized</li>
<li>
Making the final distribution
</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div className="img-wrapper">
                <figure>
                  <img src={experience} className="experience-img" />
                </figure>
              </div> */}
              <div className="content-of-benefit">
                <h3>Benefits of Managed Liquidation</h3>
                <div className="blue-divider"></div>
                <div className="benefit-para">
                  <p>
                  Asset sales can occur quickly and efficiently, which typically produces the best possible prices with the lowest related expenses. Besides, pared-down operations can be continued for a short period of time in order to maximize the remaining value in the company.
                  </p>

                  <p>
                  It can also help address trade creditors and contractor obligations in an objective and strategic manner. Furthermore, the owners, top-level management, and investors receive the assurance of a step-by-step plan to wrap up the financial and business affairs in a clean manner.
                  </p>
                </div>
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

export default Manageliquid;
