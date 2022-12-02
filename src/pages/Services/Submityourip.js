import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";

<style>
    
</style>

const Submityourip =()=>{
    return (
        <>
        <Header />
       <PageHeader pagename="Agency IP" pagelinkname="Services" />

        {/* Contact section  */}
      <section className="Contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-all">
                <div className="contact-head">
                  <h2>
                  Submit Your IP <span> For Review</span>
                  </h2>
                  <div className="blue-divider"></div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>

                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Name*</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Julia"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Company</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Julia"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Office Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Cell Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Best Time To Contact</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="123456789"
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
                        Address
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="123456789"
                        />
                      </div>
                    </div>
                    <div className="submitbtn">
                      <button>submit</button>
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
    )
}

export default Submityourip;