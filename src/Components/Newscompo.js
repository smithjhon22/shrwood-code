import React from "react";
import { Link } from "react-router-dom";
import { blog2, blog3, blogs1 } from "../constant";

const Newscompo = () => {
  const Advisory_services = [
    {
      id: 1,
      name: "Who will save the startups?",
      img: blogs1,
      des: "Marty Pichinson on who will survive the coming economic crisis.",
      date:"02",
      mon:"Mar",
    },
    {
      id: 2,
      name: 'Business is booming for Silicon Valley "undertaker"',
      img: blog2,
      des: "More from Martin Pichinson on the unprecedented damage to tech startups from the coronavirus.",
      date:"05",
      mon:"jun",
    },
    {
      id: 3,
      name: 'The "Undertaker Of Silicon Valley" Stays Busy As Startups Lay Off Thousands (with audio)',
      img: blog3,
      des: "Martin Pichinson on the ongoing COVID-19 impact.",
      date:"05",
      mon:"Mar",
    },
   
    
  ];
  // const Advisory_services = [
  //   {
  //     id: 1,
  //     name: "News Name",
  //     img: gallery11,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 2,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 3,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 4,
  //     name: "News Name",
  //     img: gallery11,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 5,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },

  //   {
  //     id: 6,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },

  //   {
  //     id: 7,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  //   {
  //     id: 8,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },

  //   {
  //     id: 9,
  //     name: "News Name",
  //     img: gallery12,
  //     des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
  //   },
  // ];

  return (
    <>
 

      {/* Advisory sec starts here */}
      <section className="Advisory-sec News-sec">
        <div className="container">
          <div className="row">
            {Advisory_services.map((data, index) => {
              return (
                <div className="col-lg-4">
                  <div
                    className={"Advisory-card-wrapper Advisory-card-" + data.id}
                  >
                    <div className="Advisory-img-wrapper">
                      <figure>
                        <img src={data.img} className="img-fluid" />
                      </figure>
                    </div>
                    <div className="Advisory-content-wrapper">
                      <h4>
                        {data.name.split(" ")[0]}{" "}
                        <span>{data.name.split(" ").slice(1).join(" ")}</span>
                      </h4>
                      <div className="blue-divider"></div>
                      <p>{data.des}</p>

                    
                      <div className="news-date-day">
                      <h4>{data.date}</h4>
                      <h5>{data.mon}</h5>
                    </div>
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </div>

         
        </div>
      </section>
      {/* Advisory sec ends here */}
     
    </>
  );
};
export default Newscompo;
