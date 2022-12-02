import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import agen from "../../assets/img/agen.webp";
import agencygirl from "../../assets/img/agencygirl.webp";
import ap1 from "../../assets/img/ap1.webp";
import ap2 from "../../assets/img/ap2.webp";
import ap3 from "../../assets/img/ap3.webp";
import ap4 from "../../assets/img/ap4.webp";
import ap5 from "../../assets/img/ap5.webp";
import strateg from "../../assets/img/strateg.webp";

import "../../assets/css/advisory.css";
import { Link } from "react-router-dom";

const Agency = () => {
  const Advisory_services = [
    {
      id: 1,
      name: "Patents",
      img: ap1,
      des: "Patents have value. Let us help you monetize them. ",
      link: "/Patents",
    },
    {
      id: 2,
      name: "Trademarks",
      img: ap2,
      des: "Your Trademarks may have value ",
      link: "/trademark",
    },
    {
      id: 3,
      name: "Copyrights",
      img: ap3,
      des: "Your Copyrights may have value",
      link: "/Copyrights",
    },
    {
      id: 4,
      name: "Know-How & Trade Secrets",
      img: ap4,
      des: "Sherwood offers all the trade secrets that are necessary to sustain competition",
      link: "/Know",
    },
    {
      id: 5,
      name: "Strategy",
      img: strateg,
      des: "Boost your Company with strategies formulated by professionals who have done it before",
      link: "/Strategy",
    },
    {
      id: 6,
      name: "Loans or Purchase of your patents",
      img: ap5,
      des: "Tired of paying all the maintenance fees, have patents that you want to monetize? We have the ability to lend or purchase high quality patents",
      link: "/loan",
    },
  ];

  return (
    <>
      <Header />

      <PageHeader pagename="agencyIP" pagelinkname="Services" />

      {/* winning sec starts here */}
      <section className="winning-sec affilation-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                agencyIP

<br /> <span>Overview</span>
                </h3>
                <div className="blue-divider"></div>
                <h5>Intellectual Property</h5>
                <p>
                agencyIP represents, lends against or purchases intangible assets. Our suite of services are;  sale, licensing, strategy, lending or purchasing against your qualified IP. Our client and buyer database is deep, diverse, ranging from Fortune companies, middle market clients, owners, developers or holders of the IP. This database helps us better understand the marketplace and the value of your IP, which enables us to better monetize your IP assets. One of our team members has been continuously voted among the top 300 IP strategists since 2019.
                </p>

                <div className="Submitip">
                  <Link to="/Submityourip">Submit Your IP For Review</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={agen} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}

      {/* Experience sec starts here */}
      <section className="Experience-sec Agencyip-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper">
                <figure>
                  <img src={agencygirl} className="experience-img" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-wrapper ">
                <h3>IP Sales and Licensing Made Easy</h3>
                {/* <h5>IP Sales and Licensing Made Easy</h5> */}
                <p>
                Sherwood is a unique advisory services firm, who understands IP. Through agencyIP we help our clients monetize and commercialize their intellectual property assets. We provide sales, licensing, strategy, loans against your patents or the purchase of your quality patents.. We understand the value of IP and can help identify your IP’s value.
                </p>
                <p>
                From market research and strategy to contract negotiation and ongoing management, Sherwood and agencyIP can bring proven results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

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
export default Agency;
