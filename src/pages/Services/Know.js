import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import know from "../../assets/img/know.webp";

const Know =()=>{
    return(
        <>

        <Header />
        <PageHeader pagename="Know-How & Trade Secrets" pagelinkname="Services" />

{/* winning sec starts here */}
<section className="winning-sec">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="content-wrapper">
          <h3>	Know-How & Trade Secrets</h3>
          <div className="blue-divider"></div>
          {/* <h5>Strategy To Protect Ideas and Grow Businesses.</h5> */}
          <p>
          Know-How and Trade Secrets are special. Once you give them away, they are gone. Through our network and database, we only offer these to responsible and reliable parties. Once the NDA is signed, we work closely with your team and the potential acquiring company, undertaking deep due diligence of the acquirer. The other avenue is selling your company with the Know-How and Trade-Secrets.
          </p>
        
        </div>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="img-wrapper img-effect sales-img">
          <figure>
            <img src={know} className="img-fluid" />
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

export default Know;