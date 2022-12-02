import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PageHeader = (props) => {
  useEffect(() => {
    let currentUrl = window.location.href.split("/");
  }, []);
  return (
    <>
      {/* page header starts here */}
      <section className="pageheader">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h4>{props.pagename}</h4>
                <div className="page-links">
                  <ul>
                    <li>
                      <Link to="/">Home &nbsp; &nbsp;-</Link>
                    </li>
                    <li>
                      {/* <a href="javascript:void(0)">{props.pagelinkname}</a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* page header ends here */}
    </>
  );
};

export default PageHeader;
