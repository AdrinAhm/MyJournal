
import React, { useState, useEffect } from "react"
import "./Auth.css"
import App from "./App"; 
import { useNavigate } from 'react-router-dom';
import background from "./Pictures/loginbackgroundimage.jpg";


export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.width = '100%';
  }, []);

  const errorLogin = () => {
    var element = document.getElementById("error-label");
    // element.style.visibility = element.style.visibility === "visible" ? "hidden" : "visible"
    element.style.visibility = "visible"
  }

  if (authMode === "signin") {

    return (
      <div style={{backgroundImage: `url(${background})`}} >
      {/* <span className="extra-space"></span> */}
      {/* <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'white',  fontFamily: 'cursive'}}>MyJournal</h1> */}
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn-submit" onClick={errorLogin}>
                Submit
              </button>
            </div>
            <p id="error-label" className="error-login">
              Username or password is incorrect
            </p>
          </div>
        </form>
      </div>
      </div>
    )
  }

  return (
    <div style={{backgroundImage: `url(${background})`}} >
      {/* <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'white',  fontFamily: 'cursive'}}>MyJournal</h1> */}
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn-submit" onClick={() =>{
                navigate('/push');
            }}>
              Submit
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}
