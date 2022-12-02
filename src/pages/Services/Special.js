import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import key from "../../assets/img/key.webp";


const Special=()=>{
    return (
        <>
        <Header />

        <PageHeader pagename="Special Circumstances" pagelinkname="Services"/>
         
         {/* winning sec starts here */}
         <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Special<span>Circumstances</span>
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
              <div className="img-wrapper img-effect sales-img">
                <figure>
                  <img src={key} className="img-fluid" />
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

export default Special;