import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import trademark from "../../assets/img/trademark.webp";

const Trademarks =()=>{
    return(
        <>
        <Header />

        
      <PageHeader pagename="Trademarks" pagelinkname="Services" />

{/* winning sec starts here */}
<section className="winning-sec">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="content-wrapper">
          <h3>Trademarks</h3>
          <div className="blue-divider"></div>
          {/* <h5>Strategy To Protect Ideas and Grow Businesses.</h5> */}
          <p>
          You have worked hard to build your business and make a mark in the industry. However, at times you may want to either sell or monetize the brand. We help you work through the options.
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
        <div className="img-wrapper img-effect sales-img">
          <figure>
            <img src={trademark} className="img-fluid" />
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

export default Trademarks;