import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import Fundsimg from "../../assets/img/fundsimg.webp";

const Funds = () => {
  return (
    <>
      <Header />
      <PageHeader
        pagename="Distribution Of Funds / Stock"
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>Distribution Of Funds / Stock</h3>
                <div className="blue-divider"></div>
                <p>
                  Distributing stocks and funds can be challenging, especially
                  during liquidation. The professionals at Sherwood Partners
                  have decades of experience managing these types of cases.
                </p>
                <p>
                We offer flawless services, and our clients trust us because they know that with our platform, they will get unparalleled service and dedication. Get in touch with us and let our experts handle all your problems. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={Fundsimg} className="img-fluid" />
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

export default Funds;
