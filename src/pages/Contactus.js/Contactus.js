import React, { useState, useRef, useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import emailjs from "@emailjs/browser";
import PageHeader from "../../Components/PageHeader";
import { toast } from "react-toastify";
import "../../assets/css/contact.css";
import {contactshow, contactstore} from "../../network/Network"

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [purpose, setPurpose] = useState("");
  const [contacttime , setContacttime] = useState("");
  const [loading, setLoading] = useState(false);
  const [settingData, setSettingData] = useState([]);

  const ContactUsHandler = (e) => {
    e.preventDefault();
    console.log("run")
    setLoading(true);
    // if (!firstName || !lastName || !email || !phone || !message || !company || !purpose ) {
    //   toast.error("Please Enter All Fields");
    //   setLoading(false);
    //   return;
    // }
    // if (
    //   !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //     email
    //   )
    // ) {
    //   toast.error("Invalid Email");
    //   setLoading(false);
    //   return;
    // }
    // if (phone.length < 10) {
    //   toast.error("The contact number must be at least 10 characters.");
    //   setLoading(false);
    //   return;
    // }
    // if (message.length < 20) {
    //   toast.error("The message must be at least 20 characters");
    //   setLoading(false);
    //   return;
    // }
    console.log("run2")
    let data = {
      first_name: firstName,
      last_name: lastName,
      company:company,
      position :position,
      email: email,
      phone_no: phone,
      purpose_of_contact:purpose,
      contact_time :contacttime,
      message :message,
    };
    console.log(data);
    contactstore(data)
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success("Successfully send");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setCompany("")
        setPurpose("");
        setPosition("");
        setContacttime("");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.errors)
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    contactshow()
      .then((res) => {
        console.log(res);
        setSettingData(res?.data?.response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const [state , setState] = useState({
  // 	firstname : null,
  // });

  // const InputVal=(e)=>{
  // 	let {name , value} = e.target;
  // 	setState({...state , [name] : value});
  // }

  // const sendGetRequest = async () => {
  // 	try {
  // 		const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  // 		console.log(res.data,'zzzzzzzzzzzzzzzzzzzzzzzzzz');
  // 	} catch (err) {
  // 		// Handle Error Here
  // 		console.error(err);
  // 	}
  // };

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_lchtw1u",
  //       "template_e43izz4",
  //       form.current,
  //       "beR-xai2OaBkxYkTe"
  //     )
  //     .then(
  //       (result) => {
	// 		console.log(result.text);

  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <>
      <Header />
      <PageHeader pagename="Contact Us" pagelinkname="Services" />

      {/* Contact section  */}
      <section className="Contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-all">
                <div className="contact-head">
                  <h2>
                    Contact <span>Us</span>
                  </h2>
                  <div className="blue-divider"></div>

                  <p>
                  Over the past 30+ years Sherwood has developed great solutions to help solve business problems. Want to get it done right, the first time?
                  </p>
                  <p>[CTA: Connect With Us!]</p>
                </div>
                {/* ref={form} onSubmit={sendEmail} */}
                <form >
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">First Name*</label>
                        <input
                          name="firstname"
                          // value={state.firstname}
                          // onChange={InputVal}
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="First name"
                          value={firstName}
                          onChange={(e)=>setFirstName(e.target.value)}
                 
                 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Last Name*</label>
                        <input
                          type="text"
						  name="Lastname"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Last name"
                          value={lastName}
                          onChange={(e)=>setLastName(e.target.value)}
                        
                 
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Company</label>
                        <input
                          type="text"
						  name="Company"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="sherwoodpartners"
                          value={company}
                          onChange={(e)=>setCompany(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Position</label>
                        <input
                          type="text"
						              name="Position"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="CEO"
                          value={position}
                          onChange={(e)=>setPosition(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email*</label>
                        <input
                          type="email"
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
                        <label for="exampleInputEmail1">Phone Number*</label>
                        <input
                          type="text"
						              name="Phone"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="123456789"
                          value={phone}
                          onChange={(e)=>setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Purpose Of Contact*
                        </label>
                        <input
                          type="text"
						              name="Purpose"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Business Inquiry"
                          value={purpose}
                          onChange={(e)=>setPurpose(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Best Time To Contact*
                        </label>
                        <input
                          type="text"
						  name="Contact"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Moring Pacific Time"
                          value={contacttime}
                          onChange={(e)=>setContacttime(e.target.value)}
                        />
                      </div>
                    </div>

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
                          placeholder="Please provide an over view"
                          value={message}
                          onChange={(e)=>setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="submitbtn">
                      <button onClick={(e) => ContactUsHandler(e)}
                              // disabled={loading}>
                              //  {loading ? "Loading.." : "SUBMIT"}
                              >
                              Submit
                              </button>
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

export default Contact;
