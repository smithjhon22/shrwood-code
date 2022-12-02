import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import family1 from "../../assets/img/family1.webp";
import family2 from "../../assets/img/family2.webp";
import family3 from "../../assets/img/family3.webp";

const Family=()=>{
    return (
        <>
        <Header />
       <PageHeader pagename="Family Held Business" pagelinkname="Services"/>

       {/* winning sec starts here */}
<section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Family Held<span>Business</span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molestie, arcu vel ornare dapibus, tortor quam dapibus libero,

                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molesti. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={family1} className="img-fluid" />
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
                  <img src={family2} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Change Always Creates A <span> Variety Of Challenges </span>
                </h3>
                <p>
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

      {/* winning sec starts here */}
<section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Fiduciary
                </h3>
                <div className="blue-divider"></div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molestie, arcu vel ornare dapibus, tortor quam dapibus libero,

                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molesti. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={family3} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}
        <Footer />
        </>
    )
}

export default Family;