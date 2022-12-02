import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import "../../assets/css/president.css";
// image import starts here
import {
	winning,
	manager_img,
	michael_maidy,
	martin_pichinson,
	singleimg16,
	singleimg17,
	pichison,
} from "../../constant";
// image import ends here

const Presidents = () => {
	const generalmanager = [
		{
			id: 1,
			img: pichison,
			designation: "Co-Founders and Co-Presidents",
			managername: "Martin Pichinson",
			des: "",
		},
	];

	const manager = [
		{
			id: 1,
			img: singleimg17,
			designation: "Co-Founders and Co-Presidents",
			managername: "MICHAEL MAIDY",
			des: "",
		},
	];
	return (
		<>
			<Header />
			{/* page header starts here */}
			<PageHeader
				pagename="Our Co-Presidents & Founders"
				pagelinkname="About Us"
			/>
			{/* page header ends here */}
			{/* winning sec starts here */}
			<section className="winning-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="content-wrapper">
								<h3>
									Co-Founders and <span>Co-President</span>
								</h3>
								<h5> Mr. Pichinson</h5>
								<p>
									Mr. Pichinson, one of the co-founders and the co-managing
									member of Sherwood Partners, Inc., takes a hands-on approach
									towards working with management teams. Developing new ways to
									create and maintain profitability and gaining maximum market
									share is his strong suit. His management style and
									understanding of corporate structure and culture enable him to
									create a sense of accomplishment within the organization that
									contributes to its growth and profitability long after his
									mission is completed.
								</p>
								<p>
									Mr. Pichinson has positioned Sherwood Partners, Inc. as one of
									the most sought-after advisory firms for companies seeking to
									reengineer, refocus, reposition, restructure, and monetize
									their intellectual property. He is one of the nation’s
									foremost experts in IP monetization and frequently speaks on
									this topic in seminars across the nation. Many of our clients
									call upon his marketing expertise to maximize their branding
									efforts.
								</p>

								<p>
									Mr.PICHINSON is on the board of the Lemelson Center of the
									Smithsonian National Museum bringing experience and knowledge
									from his experience in working with venture backed companies.
								</p>

								<p>
									Mr. Pichinson brings more than 40+ years of experience as a
									trusted business advisor and has a long history of managing
									and working with management teams and growing companies. Prior
									to co-founding Sherwood Partners, Inc., he was Chief Operating
									Officer (COO) of a well-known cookie company, COO of a major
									shoe company, for which he managed the company’s real estate
									holdings and restructured the 280-store retail chain, and COO
									of a major garment company where he helped increase sales by
									800 percent, in under 18 months.
								</p>
								<p>
									Mr. Pichinson is on the board of the Lemelson Center of the
									Smithsonian National Museum where he brings his experience and
									knowledge in working with venture-backed companies. He has
									been published and quoted in many national and international
									periodicals such as The Wall Street Journal, The Economist,
									Business Week, The New York Times, The Washington Post,
									Fortune, Business Credit, Institutional Investor's Journal,
									Journal of Private Equity, and Venture Capital Journal, as
									well as numerous other publications. He has also been a guest
									on CNN, CNNfn, NPR and Canada’s RobTV as well as other
									national television news shows focusing on the changing
									technology environment. Mr. Pichinson has also served as both
									a presenter and moderator at conferences for influential
									industry organizations such as The Smithsonian, ABI, IBF,
									INSEAD and INSOL.
								</p>
								<p>
									Mr. Pichinson holds a degree in marketing from Columbia
									College in Chicago, IL.
								</p>

								{/* <p>Mr. Pichinson holds a degree in marketing from Columbia College, Chicago, IL.</p> */}
							</div>
						</div>
						<div className="col-md-6 align-self-center">
							<div className="img-wrapper">
								<figure>
									{/* <img src={winning} className="img-fluid" /> */}
									<section className="manager-sec">
										<div className="container">
											<div className="row">
												<div className="col-md-12">
													{generalmanager.map((data, index) => {
														return (
															<div key={index} className="col-md-12">
																<div className="manager-card-wrapper">
																	<div className="manager-img-wrapper">
																		<figure>
																			<img
																				className="img-fluid"
																				src={data?.img}
																			/>
																		</figure>
																	</div>
																	<div className="manager-content-wrapper">
																		<h5>{data?.designation}</h5>
																		<h3>{data?.managername}</h3>
																		<p>{data?.des}</p>
																	</div>
																</div>
															</div>
														);
													})}
												</div>
											</div>
										</div>
									</section>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* winning sec ends here */}
			{/* manager-sec starts here */}

			{/* manager-sec ends here */}

			<section className="winning-sec reverse-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<section className="manager-sec">
								<div className="container">
									<div className="row">
										<div className="col-md-12">
											{manager.map((data, index) => {
												return (
													<div key={index} className="col-md-12">
														<div className="manager-card-wrapper">
															<div className="manager-img-wrapper">
																<figure>
																	<img className="img-fluid" src={data?.img} />
																</figure>
															</div>
															<div className="manager-content-wrapper">
																<h5>{data?.designation}</h5>
																<h3>{data?.managername}</h3>
																<p>{data?.des}</p>
															</div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</section>
						</div>
						<div className="col-md-6 align-self-center">
							<div className="img-wrapper">
								<div className="content-wrapper">
									<h3>
										Co-Founders and <span>Co-President</span>
									</h3>
									<h5>Michael A. Maidy</h5>
									<p>
										Michael A. Maidy, one of the co-founders and Co-CEO of
										Sherwood Partners, Inc., comes from a highly successful
										accounting background. He is a respected authority on
										innovative financial services and crisis management, with
										more than 40 years of experience in all areas of credit,
										lending, and finance.
									</p>

									<p>
										Before founding Sherwood in 1992, Mr. Maidy was managing
										partner of a national CPA firm with offices in Los Angeles,
										Honolulu, and New York. In his capacity as a CPA and
										financial advisor, he assisted numerous clients in diverse
										industries like real estate, apparel/textile,
										broadcasting/communications, oil and gas, and healthcare.
										His responsibilities included financial structuring and
										private placement memorandums, as well as corporate
										restructuring and reorganization. His expertise is in
										locating, negotiating, and structuring all forms of debt
										placement, including senior debt placement and
										mezzanine/equity placements. In addition, he is well known
										for working with lenders and creditors to enable companies
										facing financial crises to survive and thrive. As Co-CEO,
										Mr. Maidy helps companies profit by creating strategic
										operational and financial relationships throughout the
										United States and overseas.
									</p>

									<p>
										Mr. Maidy has extensive relationships in the venture
										capital, commercial finance and investment banking
										communities. He is one of the leading authorities on
										corporate restructuring, finance, Assignments for the
										Benefit of Creditors (ABCs), and receiverships. He likes to
										be completely involved from the start of each assignment
										until its successful completion. He is experienced in a wide
										range of industries including technology, life sciences,
										broadcasting and communications, telecommunications,
										apparel/textile, real estate and construction, distribution,
										manufacturing, and import/export.
									</p>

									<p>
										Mr. Maidy is on the board of Aniline and Ekatra. He
										graduated from the University of Southern California,
										Marshall School of Business.
									</p>

									{/* <p>Mr. Pichinson holds a degree in marketing from Columbia College, Chicago, IL.</p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Presidents;
