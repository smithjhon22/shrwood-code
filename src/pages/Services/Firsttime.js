import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import firstimg from "../../assets/img/firstimg.webp";

const Firsttime = () => {
  return (
    <>
      <Header />
      <PageHeader
        pagename="When You Want It Done Right, The First Time"
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec first-time-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                GET THE EDGE!<span> Get Sherwood</span>
                </h3>
                <div className="blue-divider"></div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molestie, arcu vel ornare dapibus, tortor quam
                  dapibus libero,
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molesti.
                </p> */}
               <ul>
                   <li>Sherwood has established itself as the firm that gets the job done.</li>

                   <li>When you have a problem, all you want is a solution and you want it done right, the first time.</li>

                   <li>We have built and implemented successful solutions, since 1992.</li>

                   <li>Sherwood has become the “Gold Standard”.</li>

                   <li>Sherwood knows the industry and the industry knows Sherwood.</li>
               </ul>

              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={firstimg} className="img-fluid" />
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

export default Firsttime;
