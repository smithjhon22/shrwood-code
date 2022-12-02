import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import strateg from "../../assets/img/strateg.webp";

const Strategy = () => {
  return (
    <>
      <Header />

      <PageHeader pagename="Strategy" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>Strategy</h3>
                <div className="blue-divider"></div>
                {/* <h5>Strategy To Protect Ideas and Grow Businesses.</h5> */}
                <p>
                 {/* agencyIP Intellectual Property Strategy can help you protect your IP as well as monetize your IP.
                  protect not just your an organization's finances but also its ideas
                  and intellectual property. By using Our service, people may you and your company to
                  achieve peace of mind that they are taking all the necessary
                  precautions to protect themselves and their ideas. */}
                  agencyIP strategy can help you protect your IP and monetize it successfully. Our services enable you and your company to achieve peace of mind. The foremost responsibility of agencyIP is to maximize your success. We have a team who can assist you in developing and implementing a plan tailored to you and your company's needs and objectives.
                </p>
                {/* <p>
                The foremost responsibility of agencyIP is to maximizing your success and IP . We have a team who can assist you in developing and implementing a plan tailored to you or your Company's needs and objectives.
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect sales-img">
                <figure>
                  <img src={strateg} className="img-fluid" />
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

export default Strategy;
