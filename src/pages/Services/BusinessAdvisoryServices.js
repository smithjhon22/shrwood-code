import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import { Link } from "react-router-dom";
import "../../assets/css/advisory.css";
import { Advisory_services } from '../Data/businessAdvisoryService';
import {
	serv1img,
	advisory1,
	advisory2,
	advisory3,
	advisory4,
	advisory5,
} from "../../constant";

const BusinessAdvisoryServices = () => {

	return (
		<>
			<Header />
			{/* page header starts here */}
			<PageHeader
				pagename="Business Advisory Services"
				pagelinkname="Services"
			/>
			{/* page header ends here */}
			{/* winning sec starts here */}
			<section className="winning-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content-wrapper">
								<h3>
									Business Advisory <span>Services</span>
								</h3>
								<div className="blue-divider"></div>
								<h5>A Holistic Approach to Business Consulting</h5>
								<p>
								At Sherwood, we take a holistic approach as business advisors and consultants in assessing your business and offer guidance to your management team. We ensure that your business strategy is sound, validated, and has clearly identified goals.
								</p>
								<p>
								We work to align the strategy with three critical dimensions of the business:
								</p>
								<ul>
									<li>Financial</li>
									{/* <li>Customer</li> */}
									<li>Operations</li>
									<li>IP | Intellectual Property</li>
								</ul>
								<p>
								At Sherwood Partners, we believe that success can only be achieved if all elements are aligned and geared toward the same destination. Seamless execution is the secret to assured success.
									<br />
									{/* <br /> Your success is our success. */}
								</p>
							</div>
						</div>
						<div className="col-lg-6 align-self-center">
							<div className="img-wrapper img-effect">
								<figure>
									<img src={serv1img} className="img-fluid" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* winning sec ends here */}
			{/* Advisory sec starts here */}
			<section className="Advisory-sec">
				<div className="container">
					<div className="row">
						{Advisory_services.map((item, index) => {
							console.log(item);
							return (
								<div className="col-lg-4">
									<div
										className={"Advisory-card-wrapper Advisory-card-" + item.id}
									>
										<div className="Advisory-img-wrapper">
											<figure>
												<img src={item.img} className="img-fluid" />
											</figure>
										</div>
										<div className="Advisory-content-wrapper">
											<h4>
												{item.name.split(" ")[0]}{" "}
												<span>{item.name.split(" ").slice(1).join(" ")}</span>
											</h4>
											<div className="blue-divider"></div>
											<p>{item.des}</p>
											{/* <Link to={`/ourexperince/${data?.id}` state={{data:}}} className="#"> */}
											<Link
												to={`/ourexperince/${item?.id}`}
												state={{ data: item }}
												className="#"
											>
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

export default BusinessAdvisoryServices;
