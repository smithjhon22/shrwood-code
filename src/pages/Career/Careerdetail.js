import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import clock from "../../assets/img/clock.webp";
import dollar from "../../assets/img/dollar.webp";
import "../../assets/css/careerdetail.css";
import { Link } from "react-router-dom";

const Careerdetail = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Careers" pagelinkname="Careers" />

      {/* Career detail section  */}
      <section className="career-deatil-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="career-detail-head">
                <div className="career-detail">
                  <h2>
                    Career Opportunity <span> Name</span>
                    <div className="blue-divider"></div>
                  </h2>
                  {/* <div className="career-dollar">
                    <p>
                      <img src={clock}></img> Full time
                    </p>
                    <p>
                      <img src={dollar}></img> $800/Month
                    </p>
                  </div> */}
                </div>
                <div className="apply-btn">
                 <Link to="/Applicationform"> <button>Apply Now</button></Link>
                </div>
              </div>
              <div className="career-detail-para">
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris commodo quis tellus ac tristique. Nunc augue nibh,
                  congue in purus blandit, vehicula placerat est. Sed tincidunt
                  metus in ullamcorper semper. Etiam vel mi eget nulla dictum
                  vehicula a eu lacus. Vivamus vitae laoreet ante, posuere
                  maximus erat. Cras commodo varius facilisis. Mauris eu congue
                  tortor, eget scelerisque tellus. Vestibulum quis mauris
                  turpis.
                </p>

                <p>
                  Curabitur convallis dui quis risus egestas, sed dictum ante
                  imperdiet. Ut efficitur odio eu tincidunt sodales. Sed vitae
                  porttitor elit. Nullam vel congue nisl, ac interdum libero.
                  Sed eget hendrerit diam, vitae euismod erat. Cras ut
                  vestibulum nulla, tincidunt fermentum turpis. In hac habitasse
                  platea dictumst.
                </p>

                <p>
                  Donec mauris quam, laoreet et nunc ut, suscipit auctor lorem.
                  Sed eget odio dictum, ultrices augue quis, scelerisque tortor.
                  Sed ornare erat nec urna placerat, nec vulputate dui
                  vulputate. Curabitur eleifend sapien lacus, sit amet semper
                  ligula tempor vel. Ut egestas vel magna sed vestibulum.
                  Integer semper, mauris id fringilla ultricies, massa erat
                  placerat nisl, a accumsan magna urna tincidunt tortor. Sed at
                  eros convallis, molestie magna sed, rhoncus sapien.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris commodo quis tellus ac tristique. Nunc augue nibh,
                  congue in purus blandit, vehicula placerat est. Sed tincidunt
                  metus in ullamcorper semper. Etiam vel mi eget nulla dictum
                  vehicula a eu lacus. Vivamus vitae laoreet ante, posuere
                  maximus erat. Cras commodo varius facilisis. Mauris eu congue
                  tortor, eget scelerisque tellus. Vestibulum quis mauris
                  turpis.
                </p>

                <p>
                  Curabitur convallis dui quis risus egestas, sed dictum ante
                  imperdiet. Ut efficitur odio eu tincidunt sodales. Sed vitae
                  porttitor elit. Nullam vel congue nisl, ac interdum libero.
                  Sed eget hendrerit diam, vitae euismod erat. Cras ut
                  vestibulum nulla, tincidunt fermentum turpis. In hac habitasse
                  platea dictumst.
                </p>
                <p>
                  Donec mauris quam, laoreet et nunc ut, suscipit auctor lorem.
                  Sed eget odio dictum, ultrices augue quis, scelerisque tortor.
                  Sed ornare erat nec urna placerat, nec vulputate dui
                  vulputate. Curabitur eleifend sapien lacus, sit amet semper
                  ligula tempor vel. Ut egestas vel magna sed vestibulum.
                  Integer semper, mauris id fringilla ultricies, massa erat
                  placerat nisl, a accumsan magna urna tincidunt tortor. Sed at
                  eros convallis, molestie magna sed, rhoncus sapien.
                </p> */}
                	<div className="Recent-job-sec">
													<h3>Join the Sherwood Team</h3>
													<p>We are always looking for great talent.</p>
													<ul>
														<li>
															Minimum five (5) years in the corporate
															restructuring business
														</li>
														<li>Excellent Excel and writing skills</li>
													</ul>
													<p>
														Tired of the travel, corporate layers and want to
														have a great career with lots of mental stimulation.
														Sherwood would be perfect. Come Join the Sherwood
														team.
													</p>
												</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Career detail section  */}
      <Footer />
    </>
  );
};

export default Careerdetail;
