import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Presidents from "../pages/About/Presidents";
import SherwoodProfessionals from "../pages/About/SherwoodProfessionals";
import SherwoodProfessionalsDetails from "../pages/About/SherwoodProfessionalsDetails";
import SherwoodBoardMembers from "../pages/About/SherwoodBoardMembers";
import BoardMembers from "../pages/About/BoardMembers";
import Services from "../pages/Services/Services";
import BusinessAdvisoryServices from "../pages/Services/BusinessAdvisoryServices";
import Ourexperince from "../pages/Experince/Ourexperience";
import Sales from "../pages/Sales/Sales";
import Purchase from "../pages/Purchase/Purchase";
import Manage from "../pages/Services/Management";
import Special from "../pages/Services/Special";
import Family from "../pages/Services/Family";
import Liquid from "../pages/Services/Liquid";
import Benefit from "../pages/Services/Benefit";
import Manageliquid from "../pages/Services/Manageliquid";
import Fedral from "../pages/Services/Fedral";
import Debtor from "../pages/Services/Debtor";
import Monitization from "../pages/Services/Monitization";
import Affilations from "../pages/Services/Affilations";
import Corporate from "../pages/Services/Corporate";
import Agency from "../pages/Services/Agencyip";
import Strategy from "../pages/Services/Strategy";
import Debt from "../pages/Services/Debt";
import Wellness from "../pages/Services/Wellness";
import Lta from "../pages/Services/Lta";
import Financial from "../pages/Services/Financial";
import Wind from "../pages/Services/Winddown";
import Debtcollection from "../pages/Services/Debtcollection";
import Finalreturntax from "../pages/Services/Finaltaxreturn";
import Funds from "../pages/Services/Funds";
import News from "../pages/News/News";
import Blog from "../pages/Blogs/Blog";
import Sheerwoodpartners from "../pages/Services/Sherwoodpartners";
import Sherwoodfinance from "../pages/Services/Sherwoodfinance";
import Contact from "../pages/Contactus.js/Contactus";
import Firsttime from "../pages/Services/Firsttime";
import Career from "../pages/Career/Career";
import Blogarticle from "../pages/Blogs/Blogarticle";
import Careerdetail from "../pages/Career/Careerdetail";
import Applicationform from "../pages/Career/Applicationform";
import Newsdetail from "../pages/News/Newsdetail";
import Helpingowners from "../pages/Services/Helpingowners";
import Submityourip from "../pages/Services/Submityourip";
import Cash from "../pages/Services/Cash";
import Faq from "../pages/Faq/Faq";
import Login from "../pages/Login/Login";
import Advisory from "../pages/Experince/Advisory";
import Interim from "../pages/Experince/Interim";
import Heldbuisness from "../pages/Experince/Heldbusiness";
import Circumstance from "../pages/Experince/Circumstance";
import Patents from "../pages/Services/Patents";
import Trademarks from "../pages/Services/Trademarks";
import Copyrights from "../pages/Services/Copyrights";
import Know from "../pages/Services/Know";
import Loan from "../pages/Services/Loan";



const PublicRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="Presidents" element={<Presidents />} />
				<Route
					path="SherwoodProfessionals"
					element={<SherwoodProfessionals />}
				/>
				{/* <Route path="SherwoodBoardMembers" element={<SherwoodBoardMembers />} /> */}
				<Route path="BoardMembers" element={<BoardMembers />} />
				<Route path="services" element={<Services />} />
				<Route
					path="BusinessAdvisoryServices"
					element={<BusinessAdvisoryServices />}
				/>
				<Route
					path="SherwoodProfessionalsDetails/:id"
					element={<SherwoodProfessionalsDetails />}
				/>

				<Route path="ourexperince/:id" element={<Ourexperince />} />
				<Route path="Sales" element={<Sales />} />
				<Route path="Purchase" element={<Purchase />} />
				<Route path="Management" element={<Manage />} />
				<Route path="Special" element={<Special />} />
				<Route path="Family" element={<Family />} />
				<Route path="Liquid" element={<Liquid />} />
				<Route path="Benefit" element={<Benefit />} />
				<Route path="Manageliquid" element={<Manageliquid />} />
				<Route path="Fedral" element={<Fedral />} />
				<Route path="Debtor" element={<Debtor />} />
				<Route path="Monitization" element={<Monitization />} />
				<Route path="Affilations" element={<Affilations />} />
				<Route path="Corporate" element={<Corporate />} />
				<Route path="Agencyip" element={<Agency />} />
				<Route path="Strategy" element={<Strategy />} />
				<Route path="Debt" element={<Debt />} />
				<Route path="wellness" element={<Wellness />} />
				<Route path="Lta" element={<Lta />} />
				<Route path="Financial" element={<Financial />} />
				<Route path="winddown" element={<Wind />} />
				<Route path="Debtcollection" element={<Debtcollection />} />
				<Route path="Finalreturntax" element={<Finalreturntax />} />
				<Route path="Funds" element={<Funds />} />
				<Route path="News" element={<News />} />
				<Route path="Blogs" element={<Blog />} />
				<Route path="Sherwoodpartners" element={<Sheerwoodpartners />} />
				<Route path="IPmonetization" element={<Sherwoodfinance />} />
				<Route path="Contactus" element={<Contact />} />
				<Route path="Firsttime" element={<Firsttime />} />
				<Route path="Career" element={<Career />} />
				<Route path="Blogarticle" element={<Blogarticle />} />
				<Route path="Careerdetail" element={<Careerdetail />} />
				<Route path="Applicationform" element={<Applicationform />} />
				<Route path="Newsdetail/:id" element={<Newsdetail />} />
				<Route path="Helpingowners" element={<Helpingowners />} />
				<Route path="Submityourip" element={<Submityourip />} />
				<Route path="cash" element={<Cash />} />
				<Route path="Faq" element={<Faq />} />
				<Route path="Login" element={<Login />} />
				<Route path="advisory" element={<Advisory />} />
				<Route path="interim" element={<Interim />} />
				<Route path="heldbuisness" element={<Heldbuisness />} />
				<Route path="circumstance" element={<Circumstance />} />
				<Route path="patents" element={<Patents />} />
				<Route path="trademark" element={<Trademarks />} />
				<Route path="copyrights" element={<Copyrights />} />
				<Route path="know" element={<Know />} />
				<Route path="loan" element={<Loan />} />
				
			</Routes>
		</BrowserRouter>
	);
};

export default PublicRoutes;
