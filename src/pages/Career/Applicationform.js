import React, { useRef  } from "react";
import DragDrop from "../../Components/Drag";
import Footer from "../../Components/Footer";
import emailjs from '@emailjs/browser';
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { careerget, careerstore } from "../../network/Network";

const Applicationform = () => {
  // const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [message, setMessage] = useState("");
  const [jobcategory, setJobcategory] = useState("");
  // const [position, setPosition] = useState("");
  const [csv, setCsv] = useState("");
  const [contacttime , setContacttime] = useState("");
  const [loading, setLoading] = useState(false);
  const [settingData, setSettingData] = useState([]);
  // const form = useRef();
	  
	// 	const sendEmail = (e) => {
	// 	  e.preventDefault();
	  
	// 	  emailjs.sendForm('service_lchtw1u', 'template_e43izz4', form.current, 'beR-xai2OaBkxYkTe')
	// 		.then((result) => {
	// 			console.log('EMAIL SEND');
				
	// 		}, (error) => {
	// 			console.log(error.text);
	// 		});
	// 	};

  const ContactUsHandler = (e) => {
    e.preventDefault();
    console.log("run")
    setLoading(true);
    if ( !lastName || !email || !phone || !message || !mobileno || !csv || !jobcategory) {
      toast.error("Please Enter All Fields");
      setLoading(false);
      return;
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      toast.error("Invalid Email");
      setLoading(false);
      return;
    }
    if (phone.length < 10) {
      toast.error("The contact number must be at least 10 characters.");
      setLoading(false);
      return;
    }
    if (message.length < 20) {
      toast.error("The message must be at least 20 characters");
      setLoading(false);
      return;
    }
    console.log("run2")
    let data = {
      // first_name: firstName,
      last_name: lastName,
      email: email,
      phone_no: phone,
      mobile_no:message,
      csv :csv,
      job_category : jobcategory,
      message :message,
    };
    console.log(data);
    careerstore(data)
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success("Successfully send");
        // setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setJobcategory("");
        setCsv("");
       
      })
      .catch((err) => {
        toast.error(err?.response?.data?.errors)
        setLoading(false);
        console.log(err);
      });
  };


  useEffect(() => {
    careerget()
      .then((res) => {
        console.log(res);
        setSettingData(res?.data?.response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header />
      <PageHeader pagename="Careers" pagelinkname="Careers" />
      {/* Contact section  */}
      <section className="Contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-all">
                <div className="contact-head">
                  <h2>
                    Application<span> Form</span>
                  </h2>
                  <div className="blue-divider"></div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
                {/* ref={form} onSubmit={sendEmail} */}

                <form >
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">First Name*</label>
                        <input
                          type="text"
                          name="first_name"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Julia"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Last Name*</label>
                        <input
                          type="text"
                          name="Last_name"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Julia"
                          value={lastName}
                          onChange={(e)=>setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                          type="text"
                          name="Email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input
                          type="text"
                          name="Phone"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                          value={phone}
                          onChange={(e)=>setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Mobile Number</label>
                        <input
                          type="text"
                          name="Mobile"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                          value={mobileno}
                          onChange={(e)=>setMobileno(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Select Job Category
                        </label>
                        <input
                          type="text"
                          name="Category"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="123456789"
                          value={jobcategory}
                          onChange={(e)=>setJobcategory(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Purpose Of Contact*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div> */}
                    {/* 
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Best Time To Contact*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div> */}

                    <div className="col-md-12">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Your Message*
                        </label>
                        <textarea
                          class="form-control"
                          name="Message"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="you@example.com"
                          value={message}
                          onChange={(e)=>setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      
                      <DragDrop />
                    </div>
                    <div className="submitbtn">
                      <button onClick={(e) => ContactUsHandler(e)}>submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Contact section  */}
      <Footer />
    </>
  );
};

export default Applicationform;
