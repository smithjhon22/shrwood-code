import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
// css file
import "../../assets/css/about.css";
// image import starts here
import { winning, experience, Business,singleimg16,team_member3, NoPicture } from "../../constant";
import { Link, useNavigate } from "react-router-dom";
// image import ends here

const About = () => {
  let navigate = useNavigate();
  const teammembers = [
    {
      id: 1,
      name: "Co-President & Founders",
      img: singleimg16,
      path: "/Presidents",
    },
    {
      id: 2,
      name: "Professionals",
      img: team_member3,
      path: "/SherwoodProfessionals",
    },
    // {
    //   id: 3,
    //   name: "Board Members",
    //   img: NoPicture,
    //   path: "/SherwoodBoardMembers",
    // },
  ];
  return (
    <>
      <Header />
      {/* page header starts here */}
      <PageHeader pagename="About Us" pagelinkname="About Us" />
      {/* page header ends here */}
      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                  "With Sherwood Partners, It’s About Doing <span>& Succeeding</span>"
                </h3>
                <p>
                There is a reason Sherwood Partners, Inc. is has become the Gold Standard of solutions. With 30+ years of experience providing effective business solutions, we have seen it all. Our seasoned team understands that our clients expect results. We not only deliver results, but we ensure that our clients are always in the loop. We take your idea and our solutions to develop a winning plan.
                </p>

                <p>Our goal is simple. Working with clients that want to win and are open to suggested solutions. Financial, legal, Private Equity,  Venture Capital, Legal and Financial institutions rely on Sherwood, when hard decisions need to be made.</p>
                <p>[Discuss Your Requirements]</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper">
                <figure>
                  <img src={winning} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}
      {/* Experience sec starts here */}
      <section className="Experience-sec">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6 align-self-center">
              <div className="img-wrapper">
                <figure>
                  <img src={experience} className="experience-img" />
                </figure>
              </div>
            </div> */}
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3>
                Our Experience and Reputation  <span>Delivers Results</span>
                </h3>
                {/* <p>Sherwood Partners specializes in:
</p> */}
                <p>
                Our experience is what gives our client the edge. We do not believe in guess an outcome, as that is not why our clients called Sherwood. Many firms may claim they have the knowledge, but knowing what can go wrong, gives our client the outcome that they expect.
                </p>

                {/* <p>Sherwood's seasoned team of professionals provides shareholders, stockholders, and senior executives with more than a report – we go above and beyond traditional tactics to help make decisions and implement plans that achieve exceptional results.</p> */}
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}
      {/* Business  sec starts here */}
      <section className="Business-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                Business Consulting with A {" "}
                  <span>Contemporary Perspective</span>
                </h3>
                <p>
                The world continues to change and every decision and suggestion we make is specific to each assignment. We do not believe in a one-size-fits-all solution, historically it does not work. For us, each assignment is unique and requires an independent thought process and a specific designed solution. We consider the client’s problems as our own and go the extra mile to create a fitting solution. Why? Because your success is our success. Plain and simple. We are here to chart a win for you and your company, with our contemporary perspective.
                </p>
             
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-wrapper">
                <figure>
                  <img src={Business} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Business  sec ends here */}
      {/* our-Team  sec starts here */}
      <section className="team-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h3>
                  Our <span>Team</span>
                </h3>
                <p>
                A Team of Experts Dedicated to Serving You       
                </p>
              </div>
            </div>
            {teammembers.map((data, index) => {
              return (
                <div
                  onClick={() => {
                    let pathname = data?.path;
                    navigate(pathname);
                  }}
                  key={index}
                  className="col-md-6"
                >
                  <div className={"team-card-wrapper team-card-no-" + data?.id}>
                    <div className="team-img-wrapper">
                      <figure>
                        <img src={data?.img} className="img-fluid" />
                      </figure>
                    </div>
                    <div className="team-name-wrapper">
                      <h5>{data?.name}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* our-Team  sec ends here */}
      <Footer />
    </>
  );
};

export default About;
