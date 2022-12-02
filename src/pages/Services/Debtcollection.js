import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import dc from "../../assets/img/dc.webp";
import dc2 from "../../assets/img/debtnew.jpeg";

const Debtcollection = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Debt Collection" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>Debt Collection Made Easy with Sherwood</h3>
                <div className="blue-divider"></div>
                {/* <h5>Debt Collection Made Easy With Sherwood </h5> */}
                <p>
                Debt collection can be a difficult and stressful process. We understand debt collection and are here to help you collect the money you’re owed. Debt collection with Sherwood Partners is the easiest way to get your debts paid. We have a network of experienced debt collection agents throughout the world who are familiar with the process of debt collection.
                </p>
                {/* <p> */}
                  {/* Debt collection can be a difficult and stressful process,
                  especially if you're not familiar with the ins and outs of the
                  process. That's where Sherwood Partners comes in. We
                  understand debt collection and we're here to help you get the
                  money you're owed. */}
                  {/* Debt collection can be a difficult and stressful process. That's where Sherwood Partners comes in. We understand debt collection and we're here to help you get the money you're owed.
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={dc2} className="img-fluid" />
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

export default Debtcollection;
