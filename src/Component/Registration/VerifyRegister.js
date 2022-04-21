import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const VerifyRegister = () => {
 
  let [OTP, setOTP] = useState("");
  const history = useHistory();
  const loginSubmit = (event) => {
    event.preventDefault();
    var object = { OTP: OTP };

    axios
      .post("http://127.0.0.1:8000/api/verifyOTP", object)
      .then((resp) => {
        alert("Welcome");
        history.push("/login");
      })
      .catch((err) => {
       alert("Please Enter Correct OTP")
      });
  };
  return (

    <div className="section bg-white">
      <div className="container">
        <div className="row full-height justify-content-center">

          <div className="section text-center">

            <form onSubmit={loginSubmit}>

              <h4 className=" pb-3 text-dark">Please Check Your Email</h4>
              <div className="form-group mt-2">

                <input type="text" className="form-style" placeholder="Enter OTP" onChange={function (event) { setOTP(event.target.value); }} value={OTP}></input><br />
                <i className="input-icon uil uil-at"></i>

              </div>

              <div className="">
                <input className="btn mt-4 mb-4" type="submit"
                  value="Submit"></input>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>

  );
};

export default VerifyRegister;