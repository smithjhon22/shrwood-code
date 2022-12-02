import React from 'react'
import {LoaderGif} from "../constant/index";
import gsap from "gsap";
import { useEffect } from 'react';
import { useState } from 'react';


const Spinner = () => {
    const [view, setView] = useState(false);
    useEffect(() => {
      var tl = gsap.timeline();
      // Pre Loader Js
      tl = gsap.timeline({
        defaults: {
          duration: 1.9,
          ease: "expo.inOut",
        },
      });
  
      tl.to(".slide-1", { width: 0 }).to("#introduction", { height: 0 });
      // Pre Loader Js
    }, []);
  
    let currentUrl = window.location.href.split("/");
    console.log(currentUrl[3]);
  
    const mystyle = {
      color:
        currentUrl[3] === "about"
          ? "#FFFF00"
          : currentUrl[3] === "services"
          ? "#32CD32"
          : currentUrl[3] === "Blogs"
          ? "#FFA500"
          : currentUrl[3] === "Affilations"
          ? "#87CEEB"
          : currentUrl[3] === "News"
          ? "#d00000"
          : currentUrl[3] === "Contactus"
          ? "	#F0FFFF"
          : currentUrl[3] === "Presidents"
          ? "		#808000"
          : currentUrl[3] === "SherwoodProfessionals"
          ? "#008080"
          : currentUrl[3] === "SherwoodBoardMembers"
          ? "	#800080"
          : currentUrl[3] === "BusinessAdvisoryServices"
          ? "	#FF8000"
          : currentUrl[3] === "Corporate"
          ? "	#ADD8E6"
          : currentUrl[3] === "Liquid"
          ? "	#A52A2A"
          : currentUrl[3] === "Financial"
          ? "#29A6A6."
          : currentUrl[3] === "Lta"
          ? "#FFC0CB"
          : currentUrl[3] === "Debt"
          ? "#16E2F5"
          : currentUrl[3] === "Wellness"
          ? "#16F529"
          : currentUrl[3] === "cash"
          ? "#FFFACD"
          : currentUrl[3] === "Sherwoodpartners"
          ? "#FED8B1"
          : currentUrl[3] === "IPmonetization"
          ? "#C19A6B"
          : currentUrl[3] === "Agencyip"
          ? "#C35817"
          : currentUrl[3] === "Firsttime"
          ? "#F08080"
          : currentUrl[3] === "Purchase"
          ? "#eb8f34"
          : "#fff",
    };
  return (
    <>
      <div className='spinner_loading'>
          {/* <figure><img className='loader' src={LoaderGif} alt="loading..."/></figure> */}
      </div>
    </>
  )
}

export default Spinner