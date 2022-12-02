import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import liquid from "../../assets/img/liquid.webp";
import l1 from "../../assets/img/l1.webp";
import l2 from "../../assets/img/l2.webp";
import l3 from "../../assets/img/interim.webp";
import l4 from "../../assets/img/l4.webp";
import l5 from "../../assets/img/l5.webp";
import "../../assets/css/advisory.css";
import { Link } from "react-router-dom";

const Liquid = () => {
  const Advisory_services = [
    {
      id: 1,
      name: "Assignment for the Benefit of Creditors ",
      img: l1,
      link: "/Benefit",
      des: "Sherwood Partners Inc., Is The Leading Assignee for ABC's in the United States",
    },
    {
      id: 2,
      name: "Managed Liquidations ",
      img: l2,
      link:"/Manageliquid",
      des: "In Some Cases, A Managed Liquidation Can Be An Alternative To A Potential Disaster ",
    },
    {
      id: 3,
      name: "State and Federal Receivers ",
      img: l3,
      link:"/Fedral",
      des: "State and Federal Receiverships does not open or Debtor or Creditor Representation",
    },
    {
      id: 4,
      name: "Debtor and Creditor Representation ",
      img: l4,
      link:"/Debtor",
      des: "We Take The Time And Effort To Fully Understand The Situation And Provide Realistic Assessments. Doing it right, the first time is the key to a successful outcome.",
    },
    // {
    //   id: 5,
    //   name: "Special Circumtances",
    //   img: l5,
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    // },
  ];

  return (
    <>
      <Header />
      <PageHeader
        pagename="Asset Liquidation and Monetization"
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                Asset Liquidation and Monetization
                </h3>
                <div className="blue-divider"></div>
                <p>
                Sherwood Partners is the leading advisory firm offering the Assignment for the Benefit of Creditors (ABCs), which is an alternative to bankruptcy. Sherwood brought the ABCs back to life in November 1999, after being dormant for many years and Sherwood Partners is known as the Gold Standard for ABCs.
                </p>
                <p>
                There may be many reasons why you choose to opt for an ABC. Perhaps time has run out, and there are no additional funds to move forward. Or you've decided to close the business since the plan is no longer viable or there are no additional funds to keep the company operating. This is when one should consider an ABC as an alternative to a bankruptcy.
                </p>
                <p>
                You have a fiduciary obligation to do what is best for all concerned. It may be possible to reorganize the company if there aren't too many constraints. However, there are various factors to be considered, such as employees and their issues, assets, and liabilities, managing creditors, legal obligations, and more. There is so much more to an ABC than an Assignee saying they can deal with it.
                </p>
                <p>
                Sherwood Partners has sophisticated solutions, dedicated infrastructure, and automated processes to make sure everything is done right.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={liquid} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}

      {/* Page Blogs section  */}
      {/* <section className="pageblog-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="whole-blog">
                <div className="blogimg">
                  <img src={l1}></img>
                </div>

                <div className="content-wrapper">
                  <h3>
                    Assignments for the <span>benefit of creditors</span>
                  </h3>
                  <div className="blue-divider"></div>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End of Page Blogs section  */}

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
                      <Link to={`${data?.link}`}>
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
export default Liquid;
