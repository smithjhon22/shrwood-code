import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import Finaltax from "../../assets/img/Finaltax.webp";

const Finalreturntax = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Final Tax Returns " pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>Paying Taxes Is Not a Burden but a Duty</h3>
                <div className="blue-divider"></div>
                {/* <h5>Paying Taxes Is Not A Burden But Rather A Duty</h5> */}
                <p>
                Filing your final tax return can be exhausting as you are already anxious and upset about your company’s fate. That is where Sherwood comes in.
                </p>
                <p>
                We have a team of experienced and skilled professionals to file your company tax returns. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={Finaltax} className="img-fluid" />
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

export default Finalreturntax;
