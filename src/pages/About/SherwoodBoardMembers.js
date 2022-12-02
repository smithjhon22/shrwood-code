import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import "../../assets/css/SherwoodBoardMembers.css";
// image import starts here
import { winning, managerpro, share } from "../../constant";
// image import ends here
const SherwoodBoardMembers = () => {
  const members = [
    {
      id: 1,
      name: "John Doe",
      designation: "General Manager",
      img: managerpro,
    },
    {
      id: 2,
      name: "John Doe",
      designation: "General Manager",
      img: managerpro,
    },
    {
      id: 3,
      name: "John Doe",
      designation: "General Manager",
      img: managerpro,
    },
    {
      id: 4,
      name: "John Doe",
      designation: "General Manager",
      img: managerpro,
    },
    {
      id: 5,
      name: "John Doe",
      designation: "General Manager",
      img: managerpro,
    },
    {
      id: 6,
      name: "John Doe",
      designation: "General Manager",
      img: managerpro,
    },
  ];
  return (
    <>
      <Header />
      {/* page header starts here */}
      <PageHeader pagename="Sherwood advisory board Members" pagelinkname="About Us" />
      {/* page header ends here */}
      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                  Sherwood <span>advisory board Members</span>
                </h3>
                <div className="blue-divider"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molestie, arcu vel ornare dapibus, tortor quam
                  dapibus libero,
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molesti.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={winning} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}
      {/* professional-sec wrapper starts here */}
      <section className="professional-sec">
        <div className="container">
          <div className="row">
            {members.map((data, index) => {
              return (
                <div key={index} className="col-lg-4 ">
                  <div className="member-card-wrapper">
                    <div className="member-img-wrapper">
                      <figure>
                        <img src={data?.img} className="img-fluid" />
                      </figure>
                    </div>
                    <div className="member-content-wrapper">
                      <div className="button-group">
                        <button
                          className="form-control"
                          onClick={() => (window.location.href = "/BoardMembers")}
                        >
                          View Profile
                        </button>
                      </div>
                      <h5>{data?.designation}</h5>
                      <h4>{data?.name}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* professional-sec wrapper ends here */}
      <Footer />
    </>
  );
};

export default SherwoodBoardMembers;
