import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import expic from "../../assets/img/expic.webp";
import liquid from "../../assets/img/liquid.webp";
import { experience } from "../../constant";

const Heldbuisness = () => {
  return (
    <>
      <Header />
      <PageHeader
        pagename="Family Held Business"
        pagelinkname="Family Held Business"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>Family Held Businesses</h3>
                <div className="blue-divider"></div>
                <p>
                  Problems happen, and unforeseen circumstances always can
                  create a challenges during a transition. Thenext generation,
                  trust or estate may hold a closely-held business asset and is
                  usually the corporatefiduciary. Being in the business of
                  administering trusts and estates can have certain challenges
                  and attimes requires a third party to assess, operate, and
                  monetize certain assets, including, but not limited toany IP
                  or liquidate all or parts of a business.
                </p>

                <h3>Business services for the next generation</h3>
                <p>
                  On occasion, a Trustee, Executor or family member operating
                  the business may require the services of anexperienced and
                  objective advisory firm to provide third-party insight into
                  important matters anddecisions. Sherwood Partners' deep
                  expertise in finance, operations, and accounting enables us to
                  providesophisticated and understandable advice that is highly
                  relevant.Sherwood is there to help and assist, not to disrupt
                  your business.
                </p>
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
                <h3>Change can create a variety of challenges</h3>
                <p>
                  Protection against potential disasters is constantly a concern
                  for Trustees and stakeholders. Anindependent view on the
                  wellness of their assets can be the difference between a
                  successful outcome or adisaster. Sherwood Partners' experience
                  in corporate restructuring, business options or bankruptcy
                  candeliver excellent options for any situation. Knowing what
                  has or may go wrong is key to making the 'rightdecision'.
                </p>

                <h3>Fiduciary</h3>
                <p>
                  Every clientdemands trust and confidence. The goal is always
                  to preserve the wealth that one hasworked hard to create for
                  themselves or for the next generation. The law imposes upon
                  you, the highestand most important duties as a result. Your
                  duties as a fiduciary may have some or all of the
                  following:The duty to exercise such skill as a person of
                  ordinary prudence would fall under the circumstances
                  (the"Prudent Person Rule")The duty to employ special skills
                  (i.e., specialty asset management)The duty to invest prudently
                  (the "Prudent Investor Rule")The duty to preserve or takes
                  steps to preserve the trust or estate propertyThe duty to
                  delegate prudently when such delegation is appropriateAt
                  Sherwood we believe consulting services must be more than
                  leaving behind a report. We assist inchange
                  integration.Sherwood is retained to assist and fulfill these
                  important legal obligations. We can assist in developing
                  acomplete and thorough analysis, including the evaluation of
                  direction and recommend potentialalternatives. Sherwood's
                  Wellness Review can be of great assistance in reaching a
                  well-informeddecision. Independent advice helps to recommend
                  and document the consideration process behind importantmatters
                  and promotes the use of sound business judgment, free from
                  bias or potential conflict of interest
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

export default Heldbuisness;
