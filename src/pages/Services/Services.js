import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import "../../assets/css/services.css";
import agen from "../../assets/img/agen.webp";
import Lt from "../../assets/img/Lt.webp";
import health from "../../assets/img/health.webp";
import cash from "../../assets/img/cash.webp";
import {
  servicesimg,
  serv1,
  sericon,
  serv3,
  serv2,
  serv4,
  serv5,
  serv6,
  serv7,
  serv8,
  serv9,
  
  
} from "../../constant";
import { Link } from "react-router-dom";

const Services = () => {
  const services_item = [
    {
      id: 1,
      img: serv1,
      name: "Business Advisory Services",
      path: "/BusinessAdvisoryServices",
    },
    {
      id: 2,
      img: serv2,
      name: "Asset Liquidation & Monetization",
      path: "/Liquid",
    },
    {
      id: 3,
      img: serv3,
      name: "Financial Management",
      path: "/Financial",
    },
    {
      id: 4,
      img: agen,
      // name: "agencyIP",
      name: "Agency IP Sales + Licensing + Strategy + Loans + Purchase of your IP",
      path: "/Agencyip",
    },
    {
      id: 5,
      img: Lt,
      name: "Liquidating Trust Agents",
      path: "/Lta",
    },
    {
      id: 4,
      img: serv6,
      name: "Corporate Restructuring",
      path: "/Corporate",
    },
    {
      id: 4,
      img: serv7,
      name: "Debt Restructuring & Management",
      path: "/Debt",
    },
    {
      id: 8,
      img: health,
      name: "Wellness Review",
      path: "/wellness",
    },
    {
      id: 9,
      img: cash,
      name: "Cash Management",
      path: "/cash",
    },
  ];
  return (
    <>
      <Header />
      {/* page header starts here */}
      <PageHeader pagename="Sherwood Services" pagelinkname="Services" />
      {/* page header ends here */}
      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Developing Unique Solutions Is What We Do To Get Your Business Back on Track 
                </h3>
                <div className="blue-divider"></div>
                {/* <h5>
                  Find The Solutions With Sherwood You Need To Get Your Business
                  Back On Track
                </h5> */}
                <p>
                Helping businesses get through tough times is what we do. From business consulting to overall financial restructuring, you can count on Sherwood. Our primary mission is to maximize value for all stakeholders by developing innovative solutions supported by efficient execution to achieve the desired results.
                </p>
                <p>
                Sherwood Partners has over 30+ years of expertise as a prominent provider of business consultancy services. We provide extensive solutions for company reorganization, asset liquidation and monetization, financial management, Assignments for the Benefit of Creditors (ABCs), wellness reviews, liquidating trust agents and IP monetization.
                </p>

                <p>After 30+ years of success, Sherwood has developed an in-depth comprehension of the various obstacles and challenges a company may have to overcome, and we have proven solutions.<b> We work tirelessly to help our clients achieve their full potential. </b></p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={servicesimg} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}
      {/* services starts here  */}
      <section className="serv-sec">
        <div className="container">
          <div className="row">
            {services_item.map((data, index) => {
              console.log(data)
              return (
                <div key={index} className={"col-lg-4 services-" + index}>
                  <div
                    onClick={() =>
                      (window.location.href = `${data?.path}`)
                    }
                    className="services-card-wrapper"
                  >
                    <div className="services-img-wrapper">
                      <figure>
                        <img src={data?.img} className="img-fluid" />
                      </figure>
                    </div>
                    <div className="services-content-wrapper">
                      <img src={sericon} className="img-fluid" />
                      <Link to={`${data?.path}`}>
                        <h4>{data?.name}</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* services ends here  */}
      <Footer />
    </>
  );
};

export default Services;
