import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import Deb from "../../assets/img/deb.webp";

const Debt = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Debt  Restructuring & Management" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec affilation-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                From Debt Disaster to Financial Security
                </h3>
                <div className="blue-divider"></div>
                <h5>From Debt Disaster to Financial Security</h5>
                <p>
                When business debt gets out of control, Sherwood Partners is here to help. We offer expert debt restructuring and management to get your finances back on track. Whether you’re drowning in debt or just feeling the pressure, our team can get you back on your feet. Contact us for debt restructuring and management services.
                </p>
                {/* <p>
                Whether you're drowning in debt or just feeling the pressure, our team can get you back on your feet. Contact us for debt restructuring and management services. GET SHERWOOD!.
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={Deb} className="img-fluid" />
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

export default Debt;
