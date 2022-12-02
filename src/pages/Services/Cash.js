import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import corpo from "../../assets/img/cash.webp";

const Cash =()=>{
    return(
        <>
        <Header />
        <PageHeader pagename="Cash Management"
        pagelinkname="Services"/>

        {/* winning sec starts here */}
<section className="winning-sec affilation-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Cash Management
                </h3>
                <div className="blue-divider"></div>
                <p>
                Cash inflow and outflow management can be a crucial factor in deciding the financial stability of a business. Mismanagement of funds can lead to a situation where the company must make hard decisions. We can assist the company, board and investors in creating solid cash management solutions.

                </p>
                {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molesti. 
                </p> */}
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
    )
}

export default Cash;