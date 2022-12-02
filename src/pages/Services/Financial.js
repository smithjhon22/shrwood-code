import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import fm from "../../assets/img/fm.webp";

const Financial =()=>{
    return (
        <>
        <Header />
         <PageHeader pagename="Financial Management" pagelinkname="Services"/>
         
        {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                Financial <span> Management</span>
                </h3>
                <div className="blue-divider"></div>
                {/* <h5>Sherwood has experience and solutions</h5> */}
                {/* <p>
                Your network of financing sources may not take you to the next level of growth. At Sherwood Partners, Inc., knows the industry and we know what can go wrong. Sherwood knows the industry and the industry knows Sherwood. This trust and ability is known as “THE SHERWOOD EDGE!
                </p> */}
                <p>
                Putting our experience to work for your business can help stabilize your company. Sherwood Partners can help you identify and address problematic areas, streamline, and optimize current resources, develop new financing sources and channels, and formulate fiscally-sound strategies for your future operations.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={fm} className="img-fluid" />
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

export default Financial;