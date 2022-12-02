import React, { useRef  } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import allhands from "../../assets/img/allhands.webp";
import emailjs from '@emailjs/browser';
import { experience } from "../../constant";
import { Link } from "react-router-dom";

const Affilations = () => {
	const form = useRef();
	  
		const sendEmail = (e) => {
		  e.preventDefault();
	  
		  emailjs.sendForm('service_lchtw1u', 'template_e43izz4', form.current, 'beR-xai2OaBkxYkTe')
			.then((result) => {
				console.log('EMAIL SEND');
				
			}, (error) => {
				console.log(error.text);
			});
		};
	return (
		<>
			<Header />
			<PageHeader
				pagename="Affiliations And Memberships"
				pagelinkname="Services"
			/>

			{/* winning sec starts here */}
			<section className="winning-sec affilation-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content-wrapper">
								<h3>
								Affiliations And  <span> Memberships</span>
								</h3>
								<div className="blue-divider"></div>
								<p>Sherwood Partners is an active member and sponsor of:</p>
								<ul className="pl-3">
									<li>ABI
									<a href="https://abi.org/" target="blank">
										<span> | American Bankruptcy Institute  </span>{" "}
										</a>
									</li>
									<li>TMA
									<a href="https://turnaround.org/" target="blank">
										<span> | Turnaround Management Association  </span>{" "}
										
											
										</a>
									</li>
									<li>NABT 
									<a href="https://www.nabt.com/" target="blank">
										<span>
											| National Association of Bankruptcy Trustees 
										</span>{" "}
									
										
										</a>
									</li>

									<li>
									<a href="https://www.nabt.com/" target="blank">
										<span>
										 ACG | Association for Corporate Growth |
										</span>{" "}
										
										
										</a>
									</li>
								</ul>
								<h5>Boards:</h5>
								<ul>
									<li>
										Martin Pichinson | Board Member | Lemelson Center for the
										Study of Invention and Innovation | Smithsonian | National
										Museum of American History |{" "}
										<a href="https://invention.si.edu/">
											https://invention.si.edu/
										</a>

										{/* <p className="board-para">Lemeleson Board</p> */}
									</li>
									<li>Michael Maidy | Board Member | Aniline.IO | Next generation field asset management software | <a href="https://www.aniline.io/">/https://www.aniline.io/</a> </li>
									<li>Michael Maidy | Board Member | Ekatra | Advanced employee analytics for the HR Community | <a href ="https://ekatraiot.com/">/https://ekatraiot.com/ </a></li>
								</ul>
								<p>Need our help? Get in touch!</p>
							</div>
						</div>
						<div className="col-lg-6 align-self-center">
							<div className="img-wrapper img-effect">
								<figure>
									<img src={allhands} className="img-fluid" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* winning sec ends here */}

			{/* Experience sec starts here */}
			{/* <section className="Experience-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<div className="img-wrapper">
								<figure>
									<img src={experience} className="experience-img" />
								</figure>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-wrapper">
								<h3>
                AM & <span>AA</span>
                </h3>
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
					</div>
				</div>
			</section> */}
			{/* Experience sec ends here */}

			{/* Contact section  */}
			<section className="Contact-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="contact-all">
								<div className="contact-head">
									{/* <h2>
                    Contact <span>Us</span>
                  </h2>
                  <div className="blue-divider"></div> */}

									<p>Send us a message to explore how Sherwood can help you</p>
								</div>

								<form ref={form} onSubmit={sendEmail}>
									<div className="row">
										<div className="col-md-12">
											<div class="form-group">
												<label for="exampleInputEmail1">Name*</label>
												<input
													type="text"
													class="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"
													placeholder="Julia"
												/>
											</div>
										</div>
										{/* <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Last Name*</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Julia"
                        />
                      </div>
                    </div> */}

										{/* <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Company</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div> */}

										{/* <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Position</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div> */}

										<div className="col-md-12">
											<div class="form-group">
												<label for="exampleInputEmail1">Email*</label>
												<input
													type="email"
													class="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"
													placeholder="you@example.com"
												/>
											</div>
										</div>

										<div className="col-md-12">
											<div class="form-group">
												<label for="exampleInputEmail1">Phone Number*</label>
												<input
													type="text"
													class="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"
													placeholder="123456789"
												/>
											</div>
										</div>

										{/* <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Purpose Of Contact*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div> */}

										{/* <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Best Time To Contact*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div> */}

										<div className="col-md-12">
											<div class="form-group">
												<label for="exampleFormControlTextarea1">
													Your Message*
												</label>
												<textarea
													class="form-control"
													id="exampleFormControlTextarea1"
													rows="3"
													placeholder="you@example.com"
												></textarea>
											</div>
										</div>
										<div className="submitbtn">
											<button>submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End of Contact section  */}

			<Footer />
		</>
	);
};

export default Affilations;
