import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import corpo from "../../assets/img/corpo.webp";

const Corporate = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Corporate Restructuring" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec affilation-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>When it's time for a change</h3>
                <div className="blue-divider"></div>
                {/* <h5>When it's time for a change</h5> */}
                <p>
                  Getting a company back on track is key to any success and with Sherwood, you get the job done right, the first time.
                </p>
                <p>
                Your Company's
                  restructuring can be an opportunity to reposition yourself and
                  your Company for a successful future..
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={corpo} className="img-fluid" />
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

export default Corporate;
