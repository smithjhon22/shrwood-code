import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery"
// style.css starts here
import "../src/assets/css/style.css";
import WOW from "wowjs"
// style.css ends here
import PublicRoutes from "./routes/PublicRoutes";
// import "bootstrap/dist/js/bootstrap";
import "@popperjs/core";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { blogshow } from "./network/Network";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  

  new WOW.WOW({
    live: false,
  }).init();

//   useEffect(() => {
//     blogshow()
//     .then((res) => {
//     console.log(res);
//     })
//     .catch((err) => {
//     console.log(err);
//     });
// }, [])


  return (
    
    <>
    
      <PublicRoutes />
      <ToastContainer />

    </>
  );
}

export default App;
