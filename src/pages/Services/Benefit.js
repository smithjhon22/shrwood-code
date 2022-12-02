import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import benefit from "../../assets/img/benefit.webp";
import { experience } from "../../constant";

const Benefit = () => {
  return (
    <>
      <Header />
      <PageHeader
        pagename="Assignments for the Benefit Of Creditors"
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                An Alternative  <span>to Bankruptcy</span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                Sherwood Partners is the leading Assignee for Assignments for the Benefit of Creditors (ABCs) in the United States. We have developed many of the standards and automated processes that are used to create an effective outcome. Many clients call on Sherwood when a company has to decide between filing for bankruptcy or considering an Assignment for the Benefit of Creditors (ABCs). We have been an Assignee for both private and public companies for 20+ years.
                </p>
                <p>
                Our team understands the complexities of an Assignment as it takes much more than just signing a contract between the Assignor (the Company) and the Assignee (Sherwood Partners). A deep understanding of the specific situation, a detailed strategic plan, and established processes are essential to monetize the assets properly and efficiently for the benefit of the creditors. Sherwood Partners also developed the ‘Operating ABC,’ which can bring additional value to the estate. We also developed a new alternative to the basic ABC process, ABCs 2.0, which can be an excellent alternative to filing bankruptcy with added protections. 
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
                Full Asset  <span>Monetization</span>
                </h3>
                <p>
                Sherwood Partners developed and initialized the 'FULL ASSET MONETIZATION' process, which we call ‘DATE CERTAIN’ sales process. The last thing any manager, investor, or board member wants is to revisit a failed situation, months, or years later. We have been successful in fully monetizing the assets of any company due to our strong relationships with national and international buyers. Our rich database enables us to reach out to the right person, which is the key to any successful monetization process. In short, the industry knows Sherwood, and Sherwood knows the industry.
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
                We Take <span>Responsibility</span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                The benefits of an Assignment for the Benefit of Creditors (ABC) are numerous. The debtor company selects the Assignee, who has a deep understanding of the process and procedures. Once Sherwood Partners becomes the Assignee, we take control and work through the problems and burdens of the company. The management team, investors, and the board are then able to move forward with their lives.
                  {/* Simply put, the problems are transferred to the Assignee. The
                  management team, investors, and the board are then able to move forward with their lives and everyday business.
                   can then move forward with their lives and everyday business.
                  Also, the personal liability of the directors and officers of
                  running an insolvent company (in the zone of insolvency) in
                  most cases ceases and handled by the assignee. */}
                </p>
                <p>
                The Assignment for the Benefit of Creditors can also be an excellent option for companies acquiring an insolvent company when an asset purchase is desired.
                </p>

                <h3>The Process</h3>

                {/* <p>
                  Your Company (Assignor) enters into a contract whereby it
                  transfers all rights, titles, interests, custody , and control
                  of all assets to an independent third-party trustee
                  (Assignee).
                </p>

                <p>
                  The assignee becomes the fiduciary to the creditors by
                  liquidating all assets and then distributing the proceed.
                </p>

                <p>
                  Secured creditors are paid from proceeds derived from their
                  security.
                </p>
                <p>
                  With an ABC, a formal claims process is established for
                  secured and unsecured creditors, thus allowing the assignee to
                  control ongoing liabilities of the Company (Proof of Claims).
                </p>

                <p>
                  The assignee is able to review, control, clean up, and work
                  toward closure to the corporate situation before and during
                  the sale of assets.
                </p> */}
                <ul className="process-ul-li">
                  <li>Your Company (the Assignor) enters into a contract whereby it transfers all rights, titles, interests, custody, and control of all assets to an independent third-party assignee, Sherwood Partners.</li>
                  <li>The assignee becomes the fiduciary to the creditors by liquidating all assets and then distributing the proceeds.</li>
                  <li>Secured creditors are paid from proceeds derived from their security.</li>
                  <li>The ABC creates a formal claims process which is established for both the secured and unsecured creditors. This allows the assignee to control ongoing liabilities of the Company. The assignee, similar to the bankruptcy process notifies all creditors with a “Proof of Claims”. This is also where Sherwood has the leading edge of automating this process, so that all creditors are notices.</li>
                  <li>The Assignee is then able to review, control, wind-down and work toward closure to the corporation and assets.</li>

                </ul>
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
                  <img src={experience} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Doing It  <span>Right</span>
                </h3>
                <p>
                Since 1999, Sherwood Partners has been an Assignee for 1,500+ Assignments for the Benefit of Creditors (ABCs). Some Assignees try to walk the walk, but what they offer is a hope of limited successes, due to the lack of experience, proven internal processes or the appropriate database to make sure all potential buyers of the asset are contacted. This is why Sherwood Partners is known for an effective Assignment for the Benefit of Creditors (ABC).  Sherwood Partners develops a strategic plan and is a knowledgeable Assignee. We manage this process effectively and our rich database with strong relationships, enables us to have a better outcome, which is why we are considered the Gold Standard of Assignees in the United States.
                </p>
                <p>
                Companies, investors, and financial and legal institutions call upon Sherwood Partners to become the Assignee due to our reputation and ability to monetize all classes of assets as well as collect the receivables through our Operating ABC.
                </p>

                {/* <p>
                  In today's complex world, the "Operating an Assignment for the
                  Benefit or Creditors" or the ABC 2.0 is a very useful method
                  to work towards a graceful and respectable exit or purchase of
                  assets. If Intellectual Property (IP) is involved, it is more
                  than just collecting boxes and waiting or hoping a call will
                  come in to sell and monetize these assets properly. Sherwood
                  Partners has monetized IP assets, usually higher than any
                  assignee due to our deep relationships, robust CRM and
                  understanding of IP value and sale techniques.
                </p>

                <p>
                  Investors, financial and legal institutions call upon Sherwood
                  Partner to become the Assignee due to our ability to monetize
                  certain assets and collect the receivables through the
                  "Operating ABC."
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

      {/* Experience sec starts here */}
      <section className="Experience-sec Benefit-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="content-wrapper">
                <h3>
                Date Certain <span> Sale</span>
                </h3>
                {/* <p>
                  Since 1999, Sherwood Partners has been the Assignee for over
                  1,500 Assignments for the Benefit of Creditors (ABCs). Some
                  assignees try to walk the walk, but what they offer is 'a
                  story of possible limited successes.' An effective Assignment
                  for the Benefit of Creditors (ABC) takes more than signing
                  acontract, collecting boxes, and then trying to make the claim
                  that they have successfully monetized the assets of the
                  Company. Sherwood Partners is considered the premier and "Gold
                  Standard" Assignee in the United States
                </p>
                <p>
                  Doing it right takes more than just signing a contract with
                  the assignee. It takes a strategic plan and a knowledgeable
                  assignee!
                </p> */}

                {/* <p>
                  In today's complex world, the "Operating Assignment for the
                  Benefit or Creditors" or the ABC 2.0 is avery useful method to
                  work towards a graceful and respectable exit or purchase of
                  assets. If Intellectual Property If IP (Intellectual Property)
                  is involved, it is more than just collectiong boxes and
                  waiting or hoping a call will come in, to monetize these assets
                  properly. Sherwood Partners has monetized IP assets higher than
                  any assignee due to our deep relationships, robust CRM and
                  understanding of IP value and sale techniques.
                </p>

                <p>
                  Investors, financial and legal institutions call upon Sherwood
                  Partner to become the Assignee due to our ability to monetize
                  certain assets and collect the receivables through the
                  "Operating ABC."
                </p> */}

                <p>
                The Date Certain Sale process creates a sense of urgency for the potential buyer. As the Assignee, we understand the creditors do not want to wait forever for closure and a sales date. Since 1999, Sherwood has developed the date-certain sales process, which takes the ambiguity out of the length of the sales process.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div className="img-wrapper">
                <figure>
                  <img src={experience} className="experience-img" />
                </figure>
              </div> */}
              <div className="content-of-benefit">
                <h3>
                The  <span>Benefits</span>
                </h3>
                <div className="blue-divider"></div>
                <div className="benefit-para">
                  <ul className="white-black">
                    <li>
                    The Assignee is selected by the Company and is not court-appointed
                    </li>
                    <li>
                    There is usually less notoriety than with a bankruptcy
                    </li>
                    <li>
                    The Assignment for the Benefit of Creditors (ABCs) is cost-effective
                    </li>
                    <li>
                    The process may be less formal, with few or no court hearings
                    </li>
                    <li>
                    The ability to move with speed can be very important in preserving the value of the assets
                    </li>
                    <li>Flexibility to permit smart business choices</li>
                    <li>
                    Usually provides closure and finality to the Company, its board, and its management
                    </li>
                    <li>
                    Asset sales can occur quickly, allowing for a higher price under such circumstances
                    </li>
                    <li>
                    A third party can acquire title to the assets in a purchase transaction
                    </li>
                    <li>
                    Limited operations can be continued to maximize the remaining value in the Company
                    </li>
                    <li>
                    Contractual obligations can be negotiated and resolved efficiently
                    </li>
                    {/* <li>
                      Contractual obligations can be negotiated and resolved
                      efficiently;
                    </li> */}
                    {/* <li>
                      If a press announcement is required, it can be simple and
                      positive (i.e., "Assets of Widgets, Inc.have been acquired
                      by XYZ Company.
                    </li> */}
                  </ul>
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

export default Benefit;
