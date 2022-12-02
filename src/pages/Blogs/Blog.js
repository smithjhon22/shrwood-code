import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import blogimg from "../../assets/img/blogimg.webp";
import { Link } from "react-router-dom";
import { blogshow } from "../../network/Network";
// import {blogs1,blog2,blog3,blog4,blog5,blog6,blog7,blog8,blog9,blog10,blog11,blog12,blog13} from "../../constant";

const Blog = () => {
  const Advisory_services = [
    // {
    //   id: 1,
    //   name: "Blogs + Articles + Great Information",
    //   img: blogimg,
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    // },
    // {
    //   id: 2,
    //   name: 'Blogs + Articles + Great Information',
    //   img: blogimg,
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    // },
    // {
    //   id: 3,
    //   name: 'Blogs + Articles + Great Information',
    //   img: blogimg,
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    // },
    // {
    //   id: 4,
    //   name: 'Blogs + Articles + Great Information ',
    //   img: blogimg,
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    // },
    // {
    //   id: 5,
    //   name: "Blogs + Articles + Great Information",
    //   img: blogimg,
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    // },

    // {
    //   id: 6,
    //   name: "Blogs + Articles + Great Information",
    //   img: blogimg,
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    // },

    // {
    //   id: 7,
    //   name: "Start-Ups Are Pummeled in the Great Unwinding",
    //   img: blog7,
    //   des: "Martin Pichinson provides perspective on the COVID-19 impact in this New York Times article.",
    // },
    // {
    //   id: 8,
    //   name: "Sherwood Partners, LLC Receives 2020 Best of Mountain View Award",
    //   img: blog8,
    //   des: "Mountain View Award Program Honors the Achievement",
    // },

    // {
    //   id: 9,
    //   name: "Silicon Valley Failures Sow the Seed for New Innovation",
    //   img: blog9,
    //   des: "Winding down failed Silicon Valley startups offers valuable lessons in how to keep up innovation.",
    // },
    // {
    //   id: 10,
    //   name: "Fitbit and Jawbone Resolve All Outstanding Civil Litigation",
    //   img: blog10,
    //   des: "Fitbit, Inc. and AliphCom announced that they have reached a global settlement.",
    // },
    // {
    //   id: 11,
    //   name: "Seminar Playback: What Entrepreneurs and Investors Should Know About Alternatives to Bankruptcy",
    //   img: blog11,
    //   des: "Panelists discussed what executives should know when their company is on the brink of insolvency.",
    // },
    // {
    //   id: 12,
    //   name: "The Growing Use of Receiverships and Assignments for Benefit of Creditors",
    //   img: blog12,
    //   des: "More district court and appellate decisions are providing greater certainty of outcome.",
    // },
    // {
    //   id: 13,
    //   name: "The ‘Terminator’ of startups says he’s seeing two to four wind-downs a week",
    //   img: blog13,
    //   des: "Sherwood co-founder Martin Pichinson sits down with TechCrunch's Connie Loizos.",
    // },
  ];


  
  // ()



  return (
    <>
      <Header />
      <PageHeader
        pagename="Blogs + Articles + Great Information"
        pagelinkname=" Blogs + Articles + Great Information"
      />
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

                      <Link to="/Blogarticle">
                          Learn more <i className="fa fa-angle-right"></i>
                      </Link>
                      <div className="news-date-day">
                        <h4>02</h4>
                        <h5>Mar</h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="coming-soon">
            <h2>Blogs + Articles + Great Information</h2>
            <h1>Comming soon</h1>

          </div>

          {/* <div className="pagination-all">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>

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
          </div> */}
        </div>
      </section>
      {/* Advisory sec ends here */}
      <Footer />
    </>
  );
};

export default Blog;
