import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import liquid from "../../assets/img/liquid.webp";
import Lt from "../../assets/img/Lt.webp";
import lt1 from "../../assets/img/lt1.webp";
import lt2 from "../../assets/img/lt2.webp";
import lt3 from "../../assets/img/lt3.webp";
import lt4 from "../../assets/img/lt4.webp";
import ipm from "../../assets/img/ipm.webp";
import dc2 from "../../assets/img/debtnew.jpeg";
import { Link } from "react-router-dom";

const Lta = () => {
  const Advisory_services = [
    {
      id: 1,
      name: "Wind-Down",
      img: lt1,
      link: "/winddown",
      des: "When the tough decision has been made, the Sherwood team has the experience to wind-down the Company. We can Collect any receivables, sell all inventory and other assets, wind-down the Company and/or facilities, get closure to the Company and monetizing all assets of the Company, sell any stock and then distribute the funds.",
      
    },
    {
      id: 2,
      name: "Debt Collection",
      img: dc2,
      link: "/Debtcollection",
      des: "Increase your productivity and acquire funds via excellent debt collection",
    },
    {
      id: 3,
      name: "Full Monetization",
      img: ipm,
      link: "/Monitization",
      des: "From receivables, liquidation, cleanup and everything that needs to be done for final closure ",
    },
    {
      id: 4,
      name: "Final Tax Returns",
      img: lt3,
      link: "/Finalreturntax",
      des: "Calculate your tax liability and much more with Sherwood Partners ",
    },
    {
      id: 5,
      name: "Distribution Of Funds / Stock",
      img: lt4,
      link: "/Funds",
      des: "Distribute funds flawlessly to gain trust of everyone ",
    },
  ];

  return (
    <>
      <Header />
      <PageHeader
        pagename="Liquidating Trust Agents | Distribution Agents"
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                Liquidating Trust Agents  <span>| Distribution Agents</span>
                </h3>
                <div className="blue-divider"></div>
                <h5>Professionals Who Can Manage the Liquidation Process</h5>
                <p>
                Sherwood Partners offers experienced services as Liquidating Trust Agents. We have the resources to provide qualified and discreet assistance to aid firms throughout the liquidation process. Our full service includes, but is not limited to, collecting receivables, selling inventory and other assets, winding-down the company and facilities, getting closure for the company, monetizing all assets, selling any stock, having the final tax returns completed and filed and then distributing the final funds according to the distribution waterfall. This full service can help create additional funds for distribution.
                  {/* Liquidating Trust Agents to help companies through bankruptcy
                  and other financially difficult times. */}
                </p>
                <p>
                We can also be of assistance as a sales agent to identify the appropriate buyers which maximizes the value of certain assets, like IP. Our team is devoted to facilitating a smooth transfer and distribution of all assets.
                </p>
                {/* <p>The differenciator is that Sherwood:</p>
                <p>
                  We can Collect any receivables, sell all inventory and other
                  assets, wind-down the Company and/or facilities, get closure
                  to the Company and monetizing all assets of the Company, sell
                  any stock and then distribute the collected funds according to
                  the distribution waterfall.This proven process can create additional funds for distribution.
                </p> */}
                {/* <p>We can also be of assistance as a sales agent to identify the appropriate buyers which maximizes the value of certain assets, i.e. IP. </p>
                <p>
                Our team is devoted to facilitating a smooth transfer and distribution of all assets.
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={Lt} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}

      {/* Advisory sec starts here */}
      <section className="Advisory-sec">
        <div className="container">
          <div className="row">
            {Advisory_services.map((data, index) => {
              return (
                <div className="col-lg-4">
                  <div
                    className={"Advisory-card-wrapper Advisory-card-" + data.id}
                  >
                    <div className="Advisory-img-wrapper">
                      <figure>
                        <img src={data.img} className="img-fluid" />
                      </figure>
                    </div>
                    <div className="Advisory-content-wrapper">
                      <h4>
                        {data.name.split(" ")[0]}{" "}
                        <span>{data.name.split(" ").slice(1).join(" ")}</span>
                      </h4>
                      <div className="blue-divider"></div>
                      <p>{data.des}</p>
                      <Link to={data?.link}>
                        Learn more <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Advisory sec ends here */}
      <Footer />
    </>
  );
};

export default Lta;
