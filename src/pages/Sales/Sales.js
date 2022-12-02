import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import Strat from "../../assets/img/strat.webp";

const Sales = () => {
  return (
    <>
      <Header />

      <PageHeader
        pagename="Sales and Licensing "
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Protect and Monetize Your Intellectual Property with Sherwood and agencyIP
                </h3>
                <div className="blue-divider"></div>
                {/* <h6>Protect and Monetize Your  Intellectual Property With Sherwood and agencyIP</h6> */}
                {/* <p>
                We provide a straightforward and effective method for monetizing their intellectual property (IP). Our relationships with  buyers and licensors of IP have been developed for over 18 years. 
                </p> */}
                <p>
                Are you looking to sell, license or borrow against your high-quality patents? We provide a straightforward and effective method for monetizing intellectual property (IP). Our relationships with buyers and licensors of IP have been nurtured for over 18 years. Contact us for more information on your IP needs and our services.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect sales-img">
                <figure>
                  <img src={Strat} className="img-fluid" />
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

export default Sales;
