import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import pur from "../../assets/img/pur.webp";
import PageHeader from "../../Components/PageHeader";


const Purchase=()=>{
    return(
        <>
        <Header />
        <PageHeader pagename="IP Purchase Or Lending" pagelinkname="Services"/>
            
                {/* winning sec starts here */}
          <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                IP Purchase  <span>or Lending</span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                There are numerous reasons to either borrow against or sell your patents. Sometimes the bottom line needs a little help. Other times, your unused patents are just costing you money due to ongoing maintenance fees. If you need a loan against your patents or want to sell your patents, agencyIP is here to help.

                </p>
                {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molesti. 
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect sales-img">
                <figure>
                  <img src={pur} className="img-fluid" />
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

export default Purchase;