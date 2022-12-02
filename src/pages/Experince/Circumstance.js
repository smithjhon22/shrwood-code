import React from "react";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import expic from "../../assets/img/expic.webp";
import liquid from "../../assets/img/liquid.webp";
import { experience } from "../../constant";
import Footer from "../../Components/Footer";

const Circumstance = () => {
  return (
    <>
      <Header />
      <PageHeader
        pagename="Special Circumstances "
        pagelinkname="Special Circumstances "
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>Special Circumstances</h3>
                <div className="blue-divider"></div>
                <p>
                  At Sherwood, we understand that every business is different
                  and that there is no one-size-fits-all solution.That's why we
                  offer comprehensive advisory services and consultation to help
                  you find the best wayforward for your business. We work with
                  you and your team to understand your unique circumstancesand
                  needs and help you develop a customized plan that will help
                  you achieve your goals.
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
                <h3>Unique Strategy Crafted By A Team Of Professionals</h3>
                {/* <h5>Sherwood Partners specializes in:</h5> */}

                <p>
                Delivering a  comprehensive consulting and counseling services to assist you in making the best decisionfor you and your Company is what the Sherwood team does,  so that you can achieve the best results.Together, we will do an in-depth analysis of your individual circumstance and come up with a strategy
                  that is personalized to your unique needs, preferences, and
                  goals. Our Team of Professionals are therewith you, on every
                  matter and challenge you may face
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

export default Circumstance;
