import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import receiving from "../../assets/img/receiving.webp";
import trustee from "../../assets/img/trustee.webp";

const Fedral = () => {
  return (
    <>
      <Header />
      <PageHeader
        pagename="State & Federal Recievers"
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                State and <span> Federal Receivers </span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                Sherwood Partners and its principals serve as State and Federal Receivers. As Receivers, Sherwood's primary focus is to maximize the enterprise value of a company while limiting disputes and legal fees. In a receivership, we take a proactive role in improving operations (if any), monetizing the assets (as appropriate), and distributing the proceeds to the creditors.
                </p>
                <p>
                Sherwood is well-positioned to assist secured creditors or other entities in the steps necessary to effectuate a Receivership and take possession of the collateral. We work simultaneously with the management team and the employees to take the immediate steps required to protect asset value. Sherwood Partners has initiated hundreds of distressed sales processes and is well-positioned to maximize the value in such settings.
                </p>
                <p>
                Historically, Receiver with both business and liquidation experience delivers better results. A Receiver needs more than just legal experience when there is a business to monetize. The Receiver needs to understand the complexities of a business and how to operate with all classes of creditors.
                </p>
                <div className="some-class-name">
                  <h5>
                  As a court-appointed Receiver, Sherwood Partners performs the following functions:
                  </h5>
                  <ul>
                    <li>
                    Quickly take possession of all or substantially all company assets, pursuant to an order of the Court or a security agreement
                    </li>
                    <li>
                    Monetize the assets in the most beneficial manner in order to optimize proceeds
                    </li>
                    <li>
                    Pay creditors based on priority status, with secured creditors leading the way
                    </li>
                    <li>
                    Facilitate processes and actions for secured creditors and limit potential issues of controlling parties
                    </li>
                  </ul>
                </div>

                <div className="some-class-name">
                  <h5>
                  
The benefits of a creditor's use of Sherwood Partners as a Receiver include:

                  </h5>
                  <ul>
                    <li>
                    Allows a company to overcome situations where owners are dead locked over critical decisions or management is ineffective in the final stages of operation
                    </li>
                    <li>
                    Removes doubts about facts and information concerning the business
                    </li>
                    <li>
                    Installs controls and processes for monetizing and collecting creditor proceeds
                    </li>
                    {/* <li>
                      Installs controls and processes for monetizing and
                      collecting creditor proceeds
                    </li> */}
                    <li>Monetize the assets as effectively as possible</li>
                  </ul>
                  <p>Sherwood Partners is more than the normal Trustee as we can handle every aspect of operating or winding-down a company. This is what we do. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={receiving} className="img-fluid" />
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
                  <img src={trustee} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Trustee Representation
                </h3>
                <p>
                Many trustees have retained Sherwood Partners to represent them as financial and IP advisors, sales agents, and operating consultants. Sherwood's primary role in such engagements is to initiate and work towards a sale of the debtor's assets, generally Intellectual Property (IP). With our deep roots in Silicon Valley, Sherwood Partners, has developed in-depth expertise in IP monetization and has built strong relationships with potential buyers of IP and technology.
                </p>
                <p>
                In this role, Sherwood Partners works with the Trustee to market the assets, create a dedicated and secure “smart room” for key information, set bid deadlines and manage the terms and conditions of the sale. We may also work with the Trustee for court approval for the best offer. Sherwood Partners has been able to balance the need for a timely sale process with the limited information and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

      {/* winning sec starts here */}
      {/* <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                Compare The ABC : Assignment 
for the Benefit <span>of Creditors</span>
                </h3>
                <div className="blue-divider"></div>
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
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={mlq} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
       {/* <div className="blue-divider"></div> */}
      <section className="Experience-sec Benefit-sec fedral-sec">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6 align-self-center">
              <div className="content-wrapper for-blue-line">
                <h3>Process</h3>
               
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molestie, arcu vel ornare dapi bus, tortor quam
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
            </div> */}
            <div className="col-lg-6">
              {/* <div className="img-wrapper">
                <figure>
                  <img src={experience} className="experience-img" />
                </figure>
              </div> */}
              {/* <div className="content-of-benefit fedral-con">
                <h3>Benefits</h3>
                <div className="blue-divider"></div>
                <div className="benefit-para">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vulputate eros mollis volutpat ultricies. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus.
                    Phasellus molestie urna ut nunc congue sollicitudin. Integer
                    vulputate ligula at turpis tempus consectetur. Nullam non
                    ultrices ipsum. Ut molestie, arcu vel ornare dapibus, tortor
                    quam dapibus libero,
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vulputate eros mollis volutpat ultricies. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Phasellus molestie urna ut nunc congue
                    sollicitudin. Integer vulputate ligula at turpis tempus
                    consectetur. Nullam non ultrices ipsum. Ut molesti.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

      <Footer />
    </>
  );
};

export default Fedral;
