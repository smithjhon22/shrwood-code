import React, { useEffect, useState } from "react";
// header logo starts here
import { logo, log } from "../constant";
import { Link } from "react-router-dom";
import $ from "jquery";
import gsap from "gsap";
// import { TimelineLite } from "gsap";

const Header = () => {
  const [view, setView] = useState(false);
  useEffect(() => {
    var tl = gsap.timeline();
    tl = gsap.timeline({
      defaults: {
        duration: 1.9,
        ease: "expo.inOut",
      },
    });

    tl.to(".slide-1", { width: 0 }).to("#introduction", { height: 0 });
  }, []);

  let currentUrl = window.location.href.split("/");
  console.log(currentUrl[3]);

  const mystyle = {
    color:
      currentUrl[3] === "about"
        ? "#32CD32"
        : currentUrl[3] === "services"
        ? "#32CD32"
        : currentUrl[3] === "Blogs"
        ? "#32CD32"
        : currentUrl[3] === "Affilations"
        ? "#32CD32"
        : currentUrl[3] === "News"
        ? "#32CD32"
        : currentUrl[3] === "Contactus"
        ? "	#32CD32"
        : currentUrl[3] === "Presidents"
        ? "		#32CD32"
        : currentUrl[3] === "SherwoodProfessionals"
        ? "#32CD32"
        : currentUrl[3] === "SherwoodBoardMembers"
        ? "	#32CD32"
        : currentUrl[3] === "BusinessAdvisoryServices"
        ? "	#32CD32"
        : currentUrl[3] === "Corporate"
        ? "	#32CD32"
        : currentUrl[3] === "Liquid"
        ? "	#A52A2A"
        : currentUrl[3] === "Financial"
        ? "#32CD32"
        : currentUrl[3] === "Lta"
        ? "#32CD32"
        : currentUrl[3] === "Debt"
        ? "#16E2F5"
        : currentUrl[3] === "Wellness"
        ? "#32CD32"
        : currentUrl[3] === "cash"
        ? "#32CD32"
        : currentUrl[3] === "Sherwoodpartners"
        ? "#32CD32"
        : currentUrl[3] === "IPmonetization"
        ? "#32CD32"
        : currentUrl[3] === "Agencyip"
        ? "#32CD32"
        : currentUrl[3] === "Firsttime"
        ? "#32CD32"
        : currentUrl[3] === "Purchase"
        ? "#32CD32"
        : "#32CD32",
  };

  return (
    <>
      <div id="introduction" 
        
      >
        <div className="slide-1 slide"></div>
        <div className="slide-2 slide"></div>
        <div 
          className="image-container"
          >
          <h1 
            className={currentUrl[3] === "about" ? "for-loader bg-yellow" : "for-loader bg-black"}
            style={mystyle}
          className="for-loader"
          >Sherwood</h1>
        </div>
      </div>
      {/* // <!-- Header Start Here --> */}
      <header id="headerTop">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-4">
              <div className="logoDv">
                <Link to="/">
                  <figure>
                    <img src={log} className="img-fluid" />
                  </figure>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-1">
              <div className="navbar_menus">
                <ul className="menus">
                  <li className="menu-items">
                    <Link to="/"> Home</Link>
                    {/* <a href="" className="menu-link">
                      Home
                    </a> */}
                  </li>
                  <li className="menu-items">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => (window.location.href = "about")}
                      >
                        About Us
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link to="/Presidents">
                            {" "}
                            Co-Presidents | Founders
                          </Link>
                          {/* <a className="dropdown-item" href="#">
                            Co Presidents | Founders
                          </a> */}
                        </li>
                        <li>
                          <Link to="/SherwoodProfessionals">Professionals</Link>
                          {/* <a className="dropdown-item" href="#">
                            Professionals
                          </a> */}
                        </li>
                        {/* <li>
                          <Link to="/SherwoodBoardMembers">Advisory board Members</Link>
                          <a className="dropdown-item" href="#">
                            Board Members
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </li>
                  <li className="menu-items">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => (window.location.href = "services")}
                      >
                        Services
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link to="/BusinessAdvisoryServices">
                            Business Advisory Services
                          </Link>
                          {/* <a className="dropdown-item" href="#">
                            Business Advisory Services
                          </a> */}
                        </li>
                        <li>
                          <Link to="/Corporate">Corporate Restructuring</Link>
                          {/* <a className="dropdown-item" href="#">
                            Corporate Restructuring
                          </a> */}
                        </li>
                        {/* <li>
                          <Link to="/Liquid">
                            Asset Liquidation and Monetization
                          </Link>
                          {/* <a className="dropdown-item" href="#">
                            Asset Liquidation and Monetization
                          </a> */}
                        {/* </li>  */}

                        <li className="inner-dropdown">
                          <a
                            className="dropdown-item sherwood-dropdown"
                            href="#"
                          >
                            <Link to="/Liquid">
                              Asset Liquidation and Monetization{" "}
                            </Link>
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <ul className="inner-dropdown-menu for-position-up">
                            <li className="dropdown-item">
                              <Link to="/Benefit">
                                Assignments for the Benefit Of Creditors
                              </Link>
                              {/* <a href="#">Agency Ip Overview</a> */}
                            </li>
                            <li className="dropdown-item">
                              <Link to="/Manageliquid">
                                Managed Liquidations
                              </Link>
                              {/* <a href="#">Sales & Licensing</a> */}
                            </li>
                            <li className="dropdown-item">
                              <Link to="/Fedral">
                                State & Federal Recievers
                              </Link>
                              {/* <a href="#">Strategy</a> */}
                            </li>
                            <li className="dropdown-item">
                              <Link to="/Debtor">
                                Debtor And Creditor Representation
                              </Link>
                              {/* <a href="#">Strategy</a> */}
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/Financial">Financial Management</Link>
                          {/* <a className="dropdown-item" href="#">
                            Financial Management
                          </a> */}
                        </li>
                        <li className="inner-dropdown">
                          <a
                            className="dropdown-item sherwood-dropdown"
                            href="#"
                          >
                            <Link to="/Agencyip">agencyIP </Link>
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <ul className="inner-dropdown-menu">
                            <li className="dropdown-item">
                              <Link to="/Agencyip">agencyIP Overview</Link>
                              {/* <a href="#">Agency Ip Overview</a> */}
                            </li>
                            <li className="dropdown-item">
                              <Link to="/Sales">SALES + Licensing</Link>
                              {/* <a href="#">Sales & Licensing</a> */}
                            </li>
                            <li className="dropdown-item">
                              <Link to="/Strategy">Strategy</Link>
                              {/* <a href="#">Strategy</a> */}
                            </li>
                            <li className="dropdown-item">
                              <Link to="/Purchase">
                                Purchase or Lending 
                              </Link>
                              {/* <a href="#">Strategy</a> */}
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/Lta">
                            Liquidating Trust Agents | Distribution Agents
                          </Link>
                          {/* <a className="dropdown-item" href="#">
                            Liquidating Trust Agents | Distribution Agents
                          </a> */}
                        </li>
                        <li>
                          <Link to="/Debt">
                            Debt Restructuring & Management
                          </Link>
                          {/* <a className="dropdown-item" href="#">
                            Debt Restructuring & Management
                          </a> */}
                        </li>
                        <li>
                          <Link to="/Wellness">Wellness Reviews</Link>
                          {/* <a className="dropdown-item" href="#">
                            Wellness Reviews
                          </a> */}
                        </li>
                        <li>
                          <Link to="/cash">Cash Management</Link>
                          {/* <a className="dropdown-item" href="#">
                            Cash Management
                          </a> */}
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-items">
                    <Link to="/Affilations">Affiliations & Memberships</Link>
                    {/* <a href="" className="menu-link">
                      Affiliations & Memberships
                    </a> */}
                  </li>
                  <li className="menu-items">
                    <Link to="/News"> News</Link>
                    {/* <a href="" className="menu-link">
                      News
                    </a> */}
                  </li>
                  <li className="menu-items">
                    <Link to="/Blogs"> Blogs</Link>
                    {/* <a href="" className="menu-link">
                      Blogs
                    </a> */}
                  </li>
                  <li className="menu-items">
                    <Link to="/Contactus">Contact Us</Link>
                    {/* <a href="" className="menu-link">
                      Contact Us
                    </a> */}
                  </li>
                  <li className="menu-items">
                    <Link to="/Career">Careers</Link>
                    {/* <a href="" className="menu-link">
                      Careers
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-7">
              <div className="right-menus">
                <div className="social_medias">
                  <label>Follow Us</label>
                  <ul className="icons">
                    <li>
                      <a href="https://www.linkedin.com/company/www-sherwoodpartners-com/">
                        {" "}
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="#">
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li> */}
                    {/* <li className="input-search">    <input type="text"></input></li> */}
                  </ul>
                </div>
                <div className="search-icons">
                  {/* <button className="search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button> */}
                </div>
                <div className="canvas_btn " onClick={() => setView(true)}>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End Here --> */}

      {/* <!-- Mobile Header Start Here --> */}
      <div className={view ? "mobile_header show" : "mobile_header "}>
        <div className="cancel" onClick={() => setView(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#000"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <ul className="mobile_menus">
          {/* <li className="menu_items">
            <a className="menu_links active_menu" href="home.php">
              Home
            </a>
          </li>
          <li className="menu_items">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="innerMenu1">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseinnerMenu1"
                    aria-expanded="false"
                    aria-controls="collapseinnerMenu1"
                  >
                    About Us
                  </button>
                </h2>
                <div
                  id="collapseinnerMenu1"
                  className="accordion-collapse collapse"
                  aria-labelledby="innerMenu1"
                  data-bs-parent="#accordionExample1"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Co Presidents | Founders</a>
                      </li>
                      <li>
                        <a href="#">Professionals</a>
                      </li>
                      <li>
                        <a href="#">Board Members</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="menu_items">
            <div className="accordion" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headinginnerMenu2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseinnerMenu2"
                    aria-expanded="false"
                    aria-controls="collapseinnerMenu2"
                  >
                    Services
                  </button>
                </h2>
                <div
                  id="collapseinnerMenu2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headinginnerMenu2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Business Advisory Services</a>
                      </li>
                      <li>
                        <a href="#">Corporate Restructuring</a>
                      </li>
                      <li>
                        <a href="#">Asset Liquidation and Monetization</a>
                      </li>
                      <li>
                        <a href="#">Financial Management</a>
                      </li>
                      <li>
                        <div className="accordion" id="accordionExample3">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headinginnerMenu3"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseinnerMenu3"
                                aria-expanded="false"
                                aria-controls="collapseinnerMenu3"
                              >
                                Agency IP <i className="fa fa-angle-right"></i>
                              </button>
                            </h2>
                            <div
                              id="collapseinnerMenu3"
                              className="accordion-collapse collapse"
                              aria-labelledby="headinginnerMenu3"
                              data-bs-parent="#accordionExample3"
                            >
                              <div className="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">Agency Ip Overview</a>
                                  </li>
                                  <li>
                                    <a href="#">Sales & Licensing</a>
                                  </li>
                                  <li>
                                    <a href="#">Strategy</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          Liquidating Trust Agents | Distribution Agents
                        </a>
                      </li>
                      <li>
                        <a href="#">Debt Restructuring & Management</a>
                      </li>
                      <li>
                        <a href="#">Wellness Reviews</a>
                      </li>
                      <li>
                        <a href="#">Cash Management</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Affiliations & Memberships
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              News
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Blogs
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Contact Us
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Careers
            </a>
          </li> */}
          <li className="menu-items">
            <Link to="/"> Home</Link>
            {/* <a href="" className="menu-link">
                      Home
                    </a> */}
          </li>
          {/* <li>
            <div class="accordion" id="dropdown-one">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingforDropdown">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseforDropdown"
                    aria-expanded="false"
                    aria-controls="collapseforDropdown"
                  >
                    About Us
                  </button>
                </h2>
                <div
                  id="collapseforDropdown"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingforDropdown"
                  data-bs-parent="#dropdown-one"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </li> */}
          <li>
            {" "}
            <Link to="/About"> About Us</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/Presidents"> Co Presidents | Founders</Link>
            {/* <a className="dropdown-item" href="#">
                            Co Presidents | Founders
                          </a> */}
          </li>
          <li>
            <Link className="dropdown-item" to="/SherwoodProfessionals">Professionals</Link>
            {/* <a className="dropdown-item" href="#">
                            Professionals
                          </a> */}
          </li>
          <li>
            {" "}
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/BusinessAdvisoryServices">
              Business Advisory Services
            </Link>
            {/* <a className="dropdown-item" href="#">
                            Business Advisory Services
                          </a> */}
          </li>
		  <li>
            <Link className="dropdown-item" to="/Corporate">Corporate Restructuring</Link>
            {/* <a className="dropdown-item" href="#">
                            Corporate Restructuring
                          </a> */}
          </li>
          <li>
            <Link className="dropdown-item" to="/Agencyip">agencyIP </Link>
          </li>

          <li>
            <Link className="dropdown-item again-drop" to="/Agencyip">agencyIP Overview</Link>
            {/* <a href="#">Agency Ip Overview</a> */}
          </li>
          <li>
            <Link className="dropdown-item again-drop" to="/Sales">IP SALES + Licensing</Link>
            {/* <a href="#">Sales & Licensing</a> */}
          </li>
          <li>
            <Link className="dropdown-item again-drop" to="/Strategy">Strategy</Link>
            {/* <a href="#">Strategy</a> */}
          </li>
          <li>
            <Link className="dropdown-item again-drop" to="/Purchase">Purchase or Lending against your patents</Link>
            {/* <a href="#">Strategy</a> */}
          </li>
          <li>
            <Link className="dropdown-item " to="/Liquid">Asset Liquidation and Monetization </Link>
          </li>
          <li>
            <Link className="dropdown-item again-drop" to="/Benefit">Assignments for the Benefit Of Creditors</Link>
            {/* <a href="#">Agency Ip Overview</a> */}
          </li>
          <li>
            <Link className="dropdown-item again-drop" to="/Manageliquid">Managed Liquidations</Link>
            {/* <a href="#">Sales & Licensing</a> */}
          </li>
          <li>
            <Link className="dropdown-item again-drop" to="/Fedral">State & Federal Recievers</Link>
            {/* <a href="#">Strategy</a> */}
          </li>
          <li>
            <Link className="dropdown-item again-drop" to="/Debtor">Debtor And Creditor Representation</Link>
            {/* <a href="#">Strategy</a> */}
          </li>

          <li>
                          <Link className="dropdown-item" to="/Lta">
                            Liquidating Trust Agents | Distribution Agents
                          </Link>
                          {/* <a className="dropdown-item" href="#">
                            Liquidating Trust Agents | Distribution Agents
                          </a> */}
                        </li>
                       
          <li>
                          <Link className="dropdown-item" to="/Debt">
                            Debt Restructuring & Management
                          </Link>
                          {/* <a className="dropdown-item" href="#">
                            Debt Restructuring & Management
                          </a> */}
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/Wellness">Wellness Reviews</Link>
                          {/* <a className="dropdown-item" href="#">
                            Wellness Reviews
                          </a> */}
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/cash">Cash Management</Link>
                          {/* <a className="dropdown-item" href="#">
                            Cash Management
                          </a> */}
                        </li>

                        <li>
                          <Link className="dropdown-item"  to="/Financial">Financial Management</Link>
                          {/* <a className="dropdown-item" href="#">
                            Financial Management
                          </a> */}
                        </li>

          

          <li className="menu-items">
            <Link to="/Affilations">Affiliations & Memberships</Link>
            {/* <a href="" className="menu-link">
                      Affiliations & Memberships
                    </a> */}
          </li>
          <li className="menu-items">
            <Link to="/News"> News</Link>
            {/* <a href="" className="menu-link">
                      News
                    </a> */}
          </li>
          <li className="menu-items">
            <Link to="/Blogs"> Blogs</Link>
            {/* <a href="" className="menu-link">
                      Blogs
                    </a> */}
          </li>
          <li className="menu-items">
            <Link to="/Contactus">Contact Us</Link>
            {/* <a href="" className="menu-link">
                      Contact Us
                    </a> */}
          </li>
          <li className="menu-items">
            <Link to="/Career">Careers</Link>
            {/* <a href="" className="menu-link">
                      Careers
                    </a> */}
          </li>
		 
		  
        </ul>
      </div>
      {/* <!-- Mobile Header End Here --> */}
    </>
  );
};

export default Header;
