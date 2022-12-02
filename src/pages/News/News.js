import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import gallery11 from "../../assets/img/gallery11.webp";
import gallery12 from "../../assets/img/gallery12.webp";
import { Link } from "react-router-dom";
import {blogs1,blog2,blog3,blog4,blog5,blog6,blog7,blog8,blog9,blog10,blog11,blog12,blog13,andrew } from "../../constant";

const News = () => {
  const Advisory_services = [
    {
      id: 1,
      name: "Who will save the startups?",
      img: blogs1,
      des: "Marty Pichinson on who will survive the coming economic crisis.",
      date:"02",
      mon:"Mar",
    },
    {
      id: 2,
      name: 'Business is booming for Silicon Valley "undertaker""',
      img: blog2,
      des: "More from Martin Pichinson on the unprecedented damage to tech startups due to the coronavirus pandemic.",
      date:"05",
      mon:"jun",
    },
    {
      id: 3,
      name: 'The "Undertaker of Silicon Valley" Stays Busy As Startups Lay Off Thousands (with audio)',
      img: blog3,
      des: "Martin Pichinson on the ongoing COVID-19 impact.",
      date:"05",
      mon:"Mar",
    },
    {
      id: 4,
      name: 'Podcast: For Silicon Valleys "Undertaker," Business Is Booming ',
      img: blog4,
      des: "Martin Pichinson in an interview discussing the ongoing coronavirus crisis.",
      date:"10",
      mon:"Mar",
    },
    {
      id: 5,
      name: "Unicorn Riding Scooter In Fatal Crash",
      img: blog5,
      des: "More on the COVID-19 impact on the tech sector with comments from Sherwood's Martin Pichinson.",
      date:"21",
      mon:"Mar",
    },

    {
      id: 6,
      name: "Silicon Valley restructuring veteran says his firm is winding down up to 3 startups a day",
      img: blog6,
      des: "Martin Pichinson reveals the toll the Coronavirus is taking on the tech industry.",
      date:"29",
      mon:"Mar",
    },

    {
      id: 7,
      name: "Start-Ups Are Pummeled in the Great Unwinding",
      img: blog7,
      des: "Martin Pichinson provides perspective on the COVID-19 impact in this New York Times article.",
      date:"05",
      mon:"jun",
    },
    {
      id: 8,
      name: "Sherwood Partners, LLC Receives 2020 Best of Mountain View Award",
      img: blog8,
      des: "Mountain View Award Program Honors the Achievement",
      date:"08",
      mon:"jun",
    },

    {
      id: 9,
      name: "Silicon Valley Failures Sow the Seed for New Innovation",
      img: blog9,
      des: "Winding down failed Silicon Valley startups offers valuable lessons",
      date:"11",
      mon:"jun",
    },
    {
      id: 10,
      name: "Fitbit and Jawbone Resolve All Outstanding Civil Litigation",
      img: blog10,
      des: "Fitbit, Inc. and AliphCom announced that they have reached a global settlement.",
      date:"17",
      mon:"jun",
    },
    {
      id: 11,
      name: "Seminar Playback: What Entrepreneurs and Investors Should Know About Alternatives to Bankruptcy",
      img: blog11,
      des: "Panelists discussed what executives should know when their company is on the brink of insolvency.",
      date:"19",
      mon:"jun",
    },
    {
      id: 12,
      name: "The Growing Use of Receiverships and Assignments for Benefit of Creditors",
      img: blog12,
      des: "More district court and appellate decisions are providing greater certainty of outcome.",
      date:"22",
      mon:"jun",
    },
    {
      id: 13,
      name: "The ‘Terminator’ of startups says he’s seeing two to four wind-downs a week",
      img: blog13,
      des: "Sherwood co-founder Martin Pichinson sits down with TechCrunch's Connie Loizos.",
      date:"26",
      mon:"jun",
    },
    {
      id: 14,
      name: "All About ABCs",
      img: andrew,
      des: "By Andrew De Camara, Senior Managing Director, Sherwood Partners Inc.",
      date:"28",
      mon:"jun",
    },
  ];
  // const Advisory_services = [
  //   {
  //     id: 1,
  //     name: "News Name",
  //     img: gallery11,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 2,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 3,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 4,
  //     name: "News Name",
  //     img: gallery11,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 5,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },

  //   {
  //     id: 6,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },

  //   {
  //     id: 7,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 8,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },

  //   {
  //     id: 9,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  // ];

  return (
    <>
      <Header />
      <PageHeader pagename="The News" pagelinkname="The News" />

      {/* Advisory sec starts here */}
      <section className="Advisory-sec News-sec">
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

                     <Link to={`/Newsdetail/${data.id}`}> 
                        Learn more <i className="fa fa-angle-right"></i>
                      </Link>
                      <div className="news-date-day">
                      <h4>{data.date}</h4>
                      <h5>{data.mon}</h5>
                    </div>
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pagination-all">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                {/* <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li> */}

                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* Advisory sec ends here */}
      <Footer />
    </>
  );
};
export default News;
