import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import ap5 from "../../assets/img/ap5.webp";
const Loan =()=>{
    return(
        <>
          <Header />
      <PageHeader
        pagename="Loans or Purchase of Your Patents"
        pagelinkname="Services"
      />   

       {/* winning sec starts here */}
       <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>Loans or Purchase of Your Patents</h3>
                <div className="blue-divider"></div>
                <p>
                Your quality patents may have value. We can either lend against or purchase your quality patents.
                </p>
                {/* <p>
                We offer flawless services, and our clients trust us because they know that with our platform, they will get unparalleled service and dedication. Get in touch with us and let our experts handle all your problems. 
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={ap5} className="img-fluid" />
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

export default Loan;