import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import "../../assets/css/login.css";
import SimpleGlobe from "../../Components/Checkgloble";

const Login = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Login" pagelinkname="Login"/>
      

      {/* Login section  */}
      <section className="login-sec">
        <div className="container">
            <div className="Login-head">
                <h2>Login</h2>

            </div>
          <div className="row">
            <div className="col-md-12">
              <div className="All-form">
                <form>
                  <div className="row">
                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Password</label>
                      <input
                        type="Password"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        required
                      />
                    
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Password</label>
                      <input
                        type="Password"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        required
                      />
                    
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Password</label>
                      <input
                        type="Password"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        required
                      />
                    
                    </div>
                  </div>

                  

                  <div className="col-md-12">
                    <div class="form-group">
                     <button>Submit</button>
                    
                    </div>
                  </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Login section  */}
      <Footer />
    </>
  );
};

export default Login;
