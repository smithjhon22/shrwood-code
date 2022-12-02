import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import expic from "../../assets/img/expic.webp";
import liquid from "../../assets/img/liquid.webp";
import { experience } from "../../constant";
import { useLocation, useParams } from 'react-router-dom';
import { Advisory_services } from '../Data/businessAdvisoryService';
import { useState } from "react";
import { useEffect } from "react";

const Experience = () => {
  let { id } = useParams();
  // let paramData = location?.state?.data;
  const [paramData , setParamData] = useState(null);

  useEffect(()=>{

    setParamData(Advisory_services.find((val)=>val?.id == id)) //{} // filter []

  },[])

  console.log("check",id)
  return (
    <>
      <Header />

      <PageHeader pagename={paramData?.name} pagelinkname="Our experience" />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
              <h3>
                {paramData?.headnewone}
                </h3>
                <h3>
                {paramData?.head}
                </h3>
                <p></p>
                <div className="blue-divider"></div>
                <p>
                  {paramData?.desc}
                </p>
                <p>
                  
                  {paramData?.secDesc}

                  
                </p>
                <p>{paramData?.newDesc}</p>
                <p>{paramData?.secDesc2}</p>
                <p>{paramData?.getsher}</p>

                <h3>
                {paramData?.businesshead}
                </h3>
                <p>{paramData?.businesspara}</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={paramData?.img} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}

      {/* Experience sec starts here */}
      <section className="Experience-sec">
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
                 
                  {paramData?.onemoreheading}
                </h3>
               
                {/* <ul className="white">
                  <li>Corporate Restructuring</li>
                  <li>Crisis management</li>
                  <li>Interim management</li>
                  <li>Forensic accounting</li>
                  <li>Due diligence</li>
                  <li>Wellness Review™</li>
                  <li>Assignments for the Benefit of Creditors (ABC)</li>
                  <li>Bankruptcy advisory services</li>
                  <li>Managed liquidations</li>
                  <li>Court-appointed receivers</li>
                  <li>Patents</li>
                  <li>Patent</li>
                </ul> */}
                <h3>{paramData?.onemoreheading}</h3>
                <h3>{paramData?.onemoreheadingsss}</h3>
                <h3>{paramData?.headunique}</h3>
                <h3>{paramData?.experince}</h3>
                <h5>{paramData?.headfive}</h5>
                <ul className="white">{paramData?.ul}</ul>
                <p>{paramData?.experpara}</p>
                <p>{paramData?.getsher}</p>
                <p>{paramData?.uniquepara}</p>
                <p>
                
                  {/* Sherwood's seasoned team of professionals provides
                  shareholders, stockholders, and senior executiveswith more
                  than a report – we go above and beyond traditional tactics to
                  help make decisions andimplement plans that achieve
                  exceptional results. */}
                  {paramData?.secpara}
                </p>

                <h3>{paramData?.onemoreheading1}</h3>
                <p>{paramData?.secpara2}</p>

                <h3>{paramData?.onemoreheading2}</h3>
                <p>{paramData?.secpara3}</p>

                <li className="li-sty">{paramData?.li1}</li>
                <li className="li-sty">{paramData?.li2}</li>
                <li className="li-sty">{paramData?.li3}</li>
                <li className="li-sty">{paramData?.li4}</li>
                <li className="li-sty">{paramData?.li5}</li>

                <p className="padd-bm">{paramData?.addnewpara}</p>


                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience sec ends here */}

      <Footer />
    </>
  );
};

export default Experience;
