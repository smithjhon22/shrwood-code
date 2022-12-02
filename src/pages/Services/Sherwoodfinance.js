import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import { experience } from "../../constant";
import sfimg from "../../assets/img/sfimg.webp";

const Sherwoodfinance = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="agencyIP | Monetizing your IP " pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                agencyIP | Monetizing your IP 
                </h3>
                <div className="blue-divider"></div>
                <p>
                agencyIP,  lends against quality patents. We also can lend as your stalking horse bidder and  assist in securing licensing opportunities throughout the world. agencyIP is not a broker, but an agency. We represent you, the IP holder, inventor or lien holder..
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
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={sfimg} className="img-fluid" />
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
                  Unique <span> Insights</span>
                </h3>
                <p>
                We have more than old friends to try to monetize your IP. We go deep assisting with the best strategy with you and/or your team. On numerous occasions, working with our clients we uncover unique opportunities that will assist in higher values for your IP. Your Success, is Our Success. That is how we work.
                </p>
                <p>
                Are you paying for maintenance fees, on patents that are no longer used? Give us a call to find out how we can assist in monetizing your IP.
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

export default Sherwoodfinance;
