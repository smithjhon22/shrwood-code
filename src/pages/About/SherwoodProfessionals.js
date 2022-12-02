import React, { useState, useEffect } from "react";
import PageHeader from "../../Components/PageHeader";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../assets/css/sherwoodpro.css";
import Slider from "react-slick";
import axios from "axios";
// image import starts here
import {
	winning,
	managerpro,
	share,
	singleimg1,
	singleimg2,
	singleimg3,
	singleimg4,
	singleimg5,
	singleimg6,
	singleimg7,
	singleimg8,
	singleimg9,
	singleimg10,
	singleimg11,
	singleimg12,
	singleimg13,
	singleimg14,
	singleimg15,
	singleimg16,
	singleimg17,
	singleimg18,
	singleimg19,
	singleimg20,
	singleimg21,
	singleimg22,
	singleimg23,
	singleimg24,
	singleimg25,
	singleimg26,
	singleimg27,
	singleimg28,
	banner1,
	banner2,
	banner3,
	banner4,
	team_member1,
	team_member2,
	team_member3,
	team_member4,
	team_member5,
	team_member6,
	team_member8,
	team_member9,
	team_member10,
	team_member11,
	team_member12,
	team_member13,
	team_member14,
	team_member15,
	team_member16,
	team_member18,
	team_member19,
	team_member20,
	team_member21,
	team_member22,
	team_member23,
	team_member24,
	team_member25,
	team_member26,
	team_member27,
} from "../../constant";
import { ApiUrl, baseUrl } from "../../network/ApiUrl";
import { SHOW, SINGLE_TEAM_MEMBER, TEAM_MEMBER } from "../../network/Endpoint";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { PostTeams } from "../../network/Network";
import Spinner from "../../Components/Spinner";
// image import ends here

const SherwoodProfessionals = () => {
	const [teamMember, setteamMember] = useState([]);
	const [state, setState] = useState();
	const [loader, setLoader] = useState(false);

	const [name, setName] = useState();
	const [title, setTitle] = useState();
	const [image, setImage] = useState();
	const [description, setDescription] = useState();

	const [fileupload, setFileupload] = useState();
	
	
	const handleLogoUpload = (e) => {
		e.preventDefault();
		const reader = new FileReader();
		const file = e.target.files[0];
		reader.onloadend = () => {
			setImage(file);
		  setFileupload(reader.result);
		};
		reader.readAsDataURL(file);
	  };

	const PostTeamData = (e) => {
		e.preventDefault();
		var data = new FormData();
		data.append("name", name);
		data.append("title", title);
		data.append("image", image);
		data.append("description", description);
		console.log(data);
		PostTeams(data)
		  .then((res) => {
			console.log(res);
			toast.success("Successfully send");
		  })
		  .catch((err) => {
			toast.error(err?.response?.data?.errors)
			console.log(err);
		  });
	  };

	  

	const SchooliesApi = async () => {
		try {
			const { data } = await axios.get(SINGLE_TEAM_MEMBER);
			console.log(data.response.data);
			setState(data.response.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		axios.get(`${ApiUrl + TEAM_MEMBER}`).then((res) => {
			setteamMember(res?.data?.data);
			console.log(res?.data?.data, "tttttttttttt");
			// console.log(teamMember?.name, "tttttttttttt");
		});
		SchooliesApi();
	}, [0]);
	// const carouselSettings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// };
	// const bannersherpro = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrow: true,
	// };
	const sherwpro = [
		// {
		//   id: 1,
		//   name: "NORTHERN CALIFORNIA OFFICE ",
		//   // designation: "General Manager",
		//   img: banner1,
		// },
		{
			id: 2,
			name: "NEW YORK OFFICE",
			// designation: "General Manager",
			img: banner2,
		},
		{
			id: 3,
			name: "SOUTHERN CALIFORNIA OFFICE ",
			// designation: "General Manager",
			img: banner3,
		},
		{
			id: 4,
			name: "SHERWOOD COMPANY",
			// designation: "General Manager",
			img: banner4,
		},
	];
	const members = [
		{
			id: 1,
			name: "MARTIN PICHINSON ",
			designation: "CO CEO ",
			img: team_member1,
		},
		{
			id: 2,
			name: "MICHAEL MAIDY ",
			designation: "CO CEO ",
			img: team_member2,
		},
		// {
		//   id: 3,
		//   name: "MICHAEL MAIDY & MARTIN PICHINSON",
		//   // designation: "General Manager",
		//   img: singleimg18,
		// },
		{
			id: 5,
			name: "CARLOS BREMAUNTZ ",
			designation: "SENIOR Vice President ",
			img: team_member4,
		},
		{
			id: 14,
			name: "JOSHUA PICHINSON  ",
			designation: "SENIOR Vice President ",
			img: team_member13,
		},
		{
			id: 19,
			name: "Molly Froschauer ",
			designation: "SENIOR Vice President  ",
			img: team_member18,
		},
		{
			id: 21,
			name: "RYAN SMALL ",
			designation: "SENIOR Vice President  ",
			img: team_member20,
		},
		{
			id: 23,
			name: "SHAREEF ELATTAR  ",
			designation: "SENIOR Vice President  ",
			img: team_member22,
		},
		{
			id: 28,
			name: "WILLIAM TRENTO ",
			designation: "SENIOR Vice President  ",
			img: team_member27,
		},
		{
			id: 6,
			name: "CATHERINE MARSHALL ",
			designation: "Vice President ",
			img: team_member5,
		},
		{
			id: 13,
			name: "JOEY BREMAUNTZ  ",
			designation: "Vice President ",
			img: team_member12,
		},
		{
			id: 26,
			name: "TRAVIS NUNLIST     ",
			designation: "Vice President",
			img: team_member25,
		},
		{
			id: 27,
			name: "WILLIAM BREMAUNTZ  ",
			designation: "ASSISTANT Vice President  ",
			img: team_member26,
		},
		{
			id: 16,
			name: "ANDREW DECAMARA ",
			designation: "SENIOR MANAGING DIRECTOR",
			img: team_member15,
		},
		{
			id: 17,
			name: "BERNIE MURPHY",
			designation: "SENIOR MANAGING DIRECTOR",
			img: team_member16,
		},
		{
			id: 9,
			name: "DAVID JOHNSON ",
			designation: "SENIOR MANAGING DIRECTOR",
			img: team_member8,
		},
		{
			id: 20,
			name: "PETER HARTHEIMER  ",
			designation: "SENIOR MANAGING DIRECTOR ",
			img: team_member19,
		},
		{
			id: 18,
			name: "BRAD GOLDSMITH  ",
			designation: "MANAGING DIRECTOR",
			img: singleimg3,
		},
		{
			id: 10,
			name: "GEORGIANA NERTEA ",
			designation: "MANAGING DIRECTOR",
			img: team_member9,
		},
		{
			id: 11,
			name: "JAROD WADA",
			designation: "MANAGING DIRECTOR",
			img: team_member10,
		},
		{
			id: 22,
			name: "SCOTT GEARY   ",
			designation: "MANAGING DIRECTOR",
			img: team_member21,
		},

		{
			id: 24,
			name: "THOMAS JONES ",
			designation: "MANAGING DIRECTOR  ",
			img: team_member23,
		},
		{
			id: 25,
			name: "TIM COX   ",
			designation: "MANAGING DIRECTOR   ",
			img: team_member24,
		},
		{
			id: 4,
			name: "CARISSA KOZACEK  ",
			designation: "DIRECTOR OF OPERATIONS",
			img: team_member3,
		},

		{
			id: 7,
			name: "CHHEKO TAING  ",
			designation: "CONTROLLER",
			img: team_member6,
		},
		{
			id: 8,
			name: "CHRISTINA KARMA ",
			designation: "ASSISTANT CONTROLLER",
			img: singleimg8,
		},

		{
			id: 15,
			name: "LISA DOMINGUEZ ",
			designation: "ASSISTANT CONTROLLER ",
			img: team_member14,
		},

		// {
		//   id: 4,
		//   name: "John Doe",
		//   designation: "General Manager",
		//   img: managerpro,
		// },
		// {
		//   id: 5,
		//   name: "John Doe",
		//   designation: "General Manager",
		//   img: managerpro,
		// },
		// {
		//   id: 6,
		//   name: "John Doe",
		//   designation: "General Manager",
		//   img: managerpro,
		// },
	];

	
	return (
		<>
			<Header />
			{/* page header starts here */}
			<PageHeader pagename="Professionals" pagelinkname="About Us" />
			{/* page header ends here */}
			{/* winning sec starts here */}
			{/* <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                  Sherwood <span>Professionals</span>
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
      </section> */}
			{/* <section className="winning-sec">
				<div className="container">
					<div className="row">
						<div className="col"></div>
						<div className="col-md-8">
							<div className="content-wrapper">
								<h3>
									Sherwood <span>Professionals</span>
								</h3>
								<div className="blue-divider secondblue"></div>
							</div>
							<Slider {...bannersherpro}>
								{sherwpro.map((value, index) => {
									return (
										<div key={index}>
											<div className="img-wrapper img-effect">
												<figure>
													<img src={value.img} className="img-fluid" />
												</figure>
												<h4>{value.name}</h4>
											</div>
										</div>
									);
								})}
							</Slider>
						</div>
						<div className="col"></div>
					</div>
				</div>
			</section> */}
			{/* winning sec ends here */}
			{/* professional-sec wrapper starts here */}
			<section className="professional-sec">
				<div className="container">
					<div className="row">
						{/* {members.map((data, index) => {
							return (
								<div key={index} className="col-lg-4 ">
									<div className="member-card-wrapper">
										<div className="member-img-wrapper">
											<figure>
												<a href="/SherwoodProfessionalsDetails">
													<img src={data?.img} className="img-fluid" />
												</a>
											</figure>
										</div>
										<div className="member-content-wrapper">
											<div className="button-group">
											</div>
											<h5>{data?.designation}</h5>
											<h4>{data?.name}</h4>
										</div>
									</div>
								</div>
							);
						})} */}
						{teamMember.map((data, index) => {
							console.log(data)
							return (
								<div key={data?._id} className="col-lg-4 ">
									<div className={"member-card-wrapper " + data?._id}>
										<div className="member-img-wrapper">
											<figure>
												<Link to={`/SherwoodProfessionalsDetails/${data?._id}`}>
													<img
														src={baseUrl + data?.image}
														className="img-fluid"
													/>
												</Link>
											</figure>
										</div>
										<div className="member-content-wrapper">
											<div className="button-group">
												{/* <button>
													<img src={share} />
												</button> */}
											</div>
											<h5>{data?.title}</h5>
											<h4 className="all-uppercase">{data?.name}</h4>
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

export default SherwoodProfessionals;
