import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import spimg from "../../assets/img/spimg.webp";
const Sheerwoodpartners = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Sherwood Partners" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                  Sherwood <span> Partners</span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                  Sherwood Partners has become one of the most trusted firms in
                  the industry today. Started in 1992 by Michael Maidy and
                  Martin Pichinson, they have built Sherwood into the “Gold
                  Standard”. Sherwood is focused on Financial Advisory work,
                  Corporate Restructuring, Receiverships, Liquidating Trust
                  Agents as well as the Assignee for Assignments for the Benefit
                  of Creditors.
                </p>
                <p>
                  Due to our deep relationships in the Venture Capital, Private
                  Equity, Legal and Financial Communities, Sherwood over the
                  past 20+ years has been a reputation of selling IP (Patents,
                  Trademarks and Copyrights). This is a very unique expertise
                  and a difficult one to build relationships. GET SHERWOOD! We
                  know the industry and the industry knows Sherwood.
                </p>
                <p>
                  Over ten years ago, due to our deep relationships, Sherwood
                  formed agencyIP, LLC. agencyIP is known as the go to firm to
                  monetize IP. The focus of agencyIP is Sales + Licensing +
                  Strategy + Patent and Trademark purchase and lending, against
                  quality patents.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={spimg} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}
      <Footer />
    </>
  );
};

export default Sheerwoodpartners;
