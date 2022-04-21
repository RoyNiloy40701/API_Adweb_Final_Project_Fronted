import axios from "axios";
import { useState } from 'react'
import Alert from "react-bootstrap/Alert";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './login.css'

const Login = () => {

  const [uname, setUname] = useState("");
  let [password, setPass] = useState("");
  const history = useHistory();

  const loginSubmit = (event) => {
    event.preventDefault();

    var obj = { CEMAIL: uname, CPASSWORD: password };
    console.log(obj);

    axios.post("http://localhost:8000/api/login", obj).then(function (resp) {
      var token = resp.data;
      console.log(token);
    
      history.push("/manager");
      alert("Login Successfully");
    }, function (err) {
      alert("Login Failed");
    });
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">

                        <form onSubmit={loginSubmit}>

                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group mt-2">
                            <input type="text" className="form-style" placeholder="Your Email" onChange={function (event) { setUname(event.target.value); }} value={uname}></input><br />
                            <i className="input-icon uil uil-at"></i>

                          </div>

                          <div className="form-group mt-2">

                            <input type="password" className="form-style" placeholder="Your Password" value={password} onChange={(event) => { setPass(event.target.value) }}></input> <br />
                            <i className="input-icon uil uil-lock-alt"></i>


                          </div>

                          <div className="">
                            <input className="btn mt-4 mb-4" type="submit"
                              value="Submit"></input>
                          </div>
                          <Link to={"/registration"} className="mb-0 mt-4 text-center link text-decoration-none">
                            Register
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
}

export default Login;
