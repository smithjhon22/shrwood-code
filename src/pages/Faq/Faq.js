import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import "../../assets/css/Faq.css";

const Faq = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="FAQ" pagelinkname="FAQ" />
      {/* Faq section  */}
      <section className="faq-sec">
        <div className="container">
          <div id="accordion">
            <div className="card">
              <div className="card-header">
                <a
                  className="card-link accordion-title"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                data-parent="#accordion"
              >
                <div className="card-body">
                  This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor sed euismod nisi porta.Duis sed odio sit amet
                  nibh vulputate cursu srem Ipsum. Proin gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor sed euismod nisi porta.Duis sed odio sit amet nibh
                  vulputate cursus
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <a
                  className="collapsed card-link accordion-title"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </a>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor sed euismod nisi porta.Duis sed odio sit amet
                  nibh vulputate cursu srem Ipsum. Proin gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor sed euismod nisi porta.Duis sed odio sit amet nibh
                  vulputate cursus
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <a
                  className="collapsed card-link accordion-title"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </a>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor sed euismod nisi porta.Duis sed odio sit amet
                  nibh vulputate cursu srem Ipsum. Proin gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor sed euismod nisi porta.Duis sed odio sit amet nibh
                  vulputate cursus
                </div>
              </div>
            </div>


            <div className="card">
              <div className="card-header">
                <a
                  className="collapsed card-link accordion-title"
                  data-toggle="collapse"
                  href="#collapsefour"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </a>
              </div>
              <div
                id="collapsefour"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor sed euismod nisi porta.Duis sed odio sit amet
                  nibh vulputate cursu srem Ipsum. Proin gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor sed euismod nisi porta.Duis sed odio sit amet nibh
                  vulputate cursus
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <a
                  className="collapsed card-link accordion-title"
                  data-toggle="collapse"
                  href="#collapsefifth"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </a>
              </div>
              <div
                id="collapsefifth"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor sed euismod nisi porta.Duis sed odio sit amet
                  nibh vulputate cursu srem Ipsum. Proin gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor sed euismod nisi porta.Duis sed odio sit amet nibh
                  vulputate cursus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Faq section  */}

      <Footer />
    </>
  );
};

export default Faq;
