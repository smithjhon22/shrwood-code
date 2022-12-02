import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import patents from "../../assets/img/patents.webp";
import { team_member4 } from "../../constant";
import { ApiUrl, baseUrl } from "../../network/ApiUrl";
import axios from "axios";
import { SINGLE_TEAM_MEMBER } from "../../network/Endpoint";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SherwoodProfessionalsDetails = () => {
	const param = useParams();
	const [post, setPost] = useState(null);
	const [locationUrl, setLocationUrl] = useState(null);
	const [SingleMember, setSingleMember] = useState(null);
	const [siteSettings, setSiteSettings] = useState(null);

	console.log(param.id, "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
	const SingleSchoolApi = async () => {
		try {
			const { data } = await axios.get(
				`${ApiUrl + SINGLE_TEAM_MEMBER}${param.id}`,
			);
			setSingleMember(data.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		SingleSchoolApi();
		setLocationUrl(window.location.href);
	}, []);
	return (
		<>
			<Header />
			{/* page header starts here */}
			<PageHeader
				pagename="Sherwood Professionals Details"
				pagelinkname="Sherwood Professionals Details"
			/>
			{/* page header ends here */}
			{/* winning sec starts here */}
			<section className="winning-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content-wrapper">
								<h3>{SingleMember?.name}</h3>
								<h6>{SingleMember?.title}</h6>
								<div className="blue-divider"></div>
								{/* <h5>Strategy To Protect Ideas and Grow Businesses.</h5> */}
								<p
									dangerouslySetInnerHTML={{
										__html: SingleMember?.description,
									}}
								></p>
							</div>
						</div>
						<div className="col-lg-6 align-self-center">
							<div className="img-wrapper img-effect sales-img">
								<figure>
									<img
										src={baseUrl + SingleMember?.image}
										className="img-fluid"
									/>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* winning sec ends here */}
			<Footer />
		</>
	);
};

export default SherwoodProfessionalsDetails;
