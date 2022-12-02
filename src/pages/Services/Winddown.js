import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import winddo from "../../assets/img/winddo.webp";
import PageHeader from "../../Components/PageHeader";

const Wind = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Wind Down" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>Wind-Down</h3>
                <div className="blue-divider"></div>
                {/* <p>
                With our experience and expertise you can get numerous advantages.
                </p> */}
                <p>With our wind-down services, you can expect: </p>
                <h3>Debt Negotiations</h3>
                <p>
                A challenging situation is when the company cannot repay its current debts and has little chance of doing so. Debt negotiations can assist in extending your runway and reducing your burn. Insolvency can stop you from continuing to do business and a successful debt negotiation can be a method for settling outstanding debts to optimize ongoing revenues for creditors. Sherwood Partners has been successful in handling all formalities, working towards a resolution.
                </p>
                {/* <p>With Sherwood Partners, you have the experience. We can handle the basic formalities, working towards a resolution. </p> */}
                {/* <p>
                Unless you have personally guaranteed the firm's commitments, you may  not be legally required as a director to pay the Company's debts. When a company enters liquidation, any personal guarantees issued by the director or guarantor become enforceable, and the director or guarantor is liable for repaying any associated borrowings.
                </p> */}
                <h3>Suspension of Judicial Proceedings</h3>
                <p>When a business declares bankruptcy, all legal proceedings against it cease. If you are not personally accountable for a business debt.</p>
                <h3>Abandoning Leases</h3>
                <p>Liquidation often means that no additional payments will be paid on lease or hire/purchase arrangements. The leasing business may be able to collect any unpaid arrears from insolvency practitioners and other creditors if any are owed. If you sign a property leasing agreement, you may be asked to provide personal guarantees. We help you review your obligations carefully to see whether you will be held personally liable for the duration of the lease.</p>
                
                
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={winddo} className="img-fluid" />
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

export default Wind;
