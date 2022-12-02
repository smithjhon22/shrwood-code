import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { footer_logo, log, logo, linkedin,footlogo,linkdenss } from "../constant";

const Footer = () => {
	return (
		<>
			{/* <!-- Footer Start Here --> */}
			<footer>
				<div className="container">
					<div className="newsletter">
						<div className="row align-items-center">
							<div className="col-lg-7">
								<div className="heading">
									<h4>Subscribe to Our Newsletter</h4>
									{/* <p>
                    uspendisse mollis ante imperdiet, dictum sapien eu, suscipit
                    turpis. Curabitur enim purus, dignissim non
                  </p> */}
								</div>
							</div>
							<div className="col-lg-5">
								<div className="newsletter_box">
									<div className="form-group">
										<input
											type="email"
											placeholder="Your Email Addrress"
											className="form-control"
										/>
										<button className="btn-sherwood">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 p-0 m-0">
							<div className="logoDv">
								<figure>
									<img src={footlogo} className="img-fluid" />
								</figure>
							</div>
							{/* <p className="for-font-size">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                .
              </p> */}
							<div className="button-group">
								<a
									href="http://www.proofofclaims.com/"
									target="blank"
									className="btn-sherwood"
								>
									Proof of Claims Form
								</a>
							</div>
						</div>
						<div className="col-lg-5 p-0 m-0">
							<div className="footer-content scnd-content">
								<div className="head">
									<h4>Quick links</h4>
								</div>
								<ul className="footer-link">
									<li>
										<Link to="/Sherwoodpartners">Sherwood Partners</Link>
										{/* <a href="#">SHERWOOD PARTNERS</a> */}
									</li>
									<li>
										{/* <Link to="/IPmonetization">agencyIP Finance</Link> */}
										<Link to="/IPmonetization"> Lending or purchasing your IP</Link>
										{/* <a href="#">SHERWOOD FINANCE</a> */}
									</li>
									<li>
										<Link to="/Wellness">Wellness Reviews</Link>
										{/* <a href="#">WELLNESS REVIEW</a> */}
									</li>
									<li>
										<Link className="agencyip-name" to="/Agencyip">
											agency<span className="Ip-uppercase">IP</span>{" "}
										</Link>
										{/* <a href="#">AGENCY IP</a> */}
									</li>
									<li>
										<Link to="/Lta">
										Liquidation Trust Agents | Distribution Agents
										</Link>
										{/* <a href="#">
                      lIQUIDATION TRUST AGENTS | DISTRIBUTION AGENTS
                    </a> */}
									</li>
									<li>
										<Link to="/Firsttime">
										WHEN YOU WANT IT DONE RIGHT, THE FIRST TIME
										</Link>
										{/* <a href="#">WHEN YOU WANT IT DONE RIGHT, THE FIRST TIME </a> */}
									</li>
									{/* <li>
										<Link to="/Faq">FAQ</Link>
									</li> */}
								</ul>
							</div>
						</div>
						<div className="col-lg-3 p-0 m-0">
							<div className="footer-content">
								<div className="head">
									<h4>CONTACT US</h4>
								</div>
								<ul className="info">
									<li>	SHERWOOD PARTNERS INC</li>
									<li> SILICON VALLEY | LOS ANGELES | NEW YORK </li>
									<li>3945 FREEDOM CIRCLE SUITE 560 SANTA CLARA, CA 95054</li>
									<li>
										<a href="tel:650-454-8001">PHONE: 650-454-8001</a>
									</li>
									<li>
										<a href="#">FAX: 650-454-8040</a>
									</li>
									<li>
										<a href="mailto:INFO@SHERWOODPARTNERS.COM">
										INFO@SHERWOODPARTNERS.COM
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/company/www-sherwoodpartners-com/"
											target="blank"
										>
											<img src={linkdenss} className="img-fluid" />
										</a>
									</li>
									
								</ul>
							</div>
						</div>
					</div>
					<div className="copyright text-center">
						<p>© Sherwood Partners Service 2022. All rights reserved.</p>
					</div>
				</div>
			</footer>
			{/* <!-- Footer End Here --> */}
		</>
	);
};

export default Footer;
