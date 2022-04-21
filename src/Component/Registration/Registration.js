import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './Registration.css'

const Registration = () => {

     let [name, setName] = useState("");
     let [email, setEmail] = useState("");
     let [password, setPassword] = useState("");
     let [phone, setPhone] = useState("");
     const history = useHistory();


     const registerSubmit = (e) => {
          e.preventDefault();
          var obj = { CNAME: name, CEMAIL: email, CPASSWORD: password, CPHONE: phone };
          console.log(obj);
          axios
               .post("http://127.0.0.1:8000/api/registration", obj)
               .then((resp) => {
                    if (resp) {
                         var object = { CEMAIL: email };
                         axios
                              .post("http://127.0.0.1:8000/api/mail", object)
                              .then((response) => {
                                   console.log(response);
                              });
                    }
                   // console.log(resp);
                    alert("An email is sent to your mail");
                    history.push(`/verify`);
               })
               .catch((err) => {
                    alert("Registration Failed");
               });
     };
     return (

          <div class="section">
               <div class="container">
                    <div class="row full-height justify-content-center">
                         <div class="col-12 text-center align-self-center py-5">
                              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                   <h6 class="mb-0 pb-3"><span>Sign Up</span></h6>

                                   <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                             <div class="card-front">
                                                  <div class="center-wrap">
                                                       <div class="section text-center">

                                                            <form onSubmit={registerSubmit}>

                                                                 <div class="form-group">
                                                                      <input type="text" className="form-style" placeholder="Your Name" onChange={function (event) { setName(event.target.value); }} value={name}></input><br />
                                                                      <i class="input-icon uil uil-user"></i>

                                                                 </div>

                                                                 <div class="form-group mt-2">

                                                                      <input type="email" className="form-style" placeholder="Your Email" onChange={function (event) { setEmail(event.target.value); }} value={email}></input><br />
                                                                      <i class="input-icon uil uil-at"></i>

                                                                 </div>

                                                                 <div class="form-group mt-2">
                                                                      <input type="password" className="form-style" placeholder="Your Password" onChange={function (event) { setPassword(event.target.value); }} value={password}></input><br />
                                                                      <i class="input-icon uil uil-lock-alt"></i>


                                                                 </div>

                                                                 <div class="form-group mt-2">
                                                                      <input type="text" className="form-style" placeholder="Your Phone" onChange={function (event) { setPhone(event.target.value); }} value={phone}></input><br />
                                                                      <i class="input-icon uil uil-lock-alt"></i>

                                                                 </div>


                                                                 <div class="">
                                                                      <input class="btn mt-4 mb-1" type="submit"
                                                                           value="Submit"></input>
                                                                 </div>
                                                                 <Link to={"/login"} className="mb-0 mt-4 text-center link text-decoration-none">
                                                                      Login
                                                                 </Link>

                                                            </form>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
          </div>

     );
};

export default Registration;