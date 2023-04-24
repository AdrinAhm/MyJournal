
import React, { useState } from "react"
import "./Auth.css"
import App from "./App"; 
import { useNavigate } from 'react-router-dom';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

const loginDetails = {
  username,
  password
};

const newLogin = await API.graphql({ 
  query: mutations.createLogin, 
  variables: { input: loginDetails }
});

export default function (props) {

  const [usernameInput, setUsernameInput, passwordInput, setPasswordInput] = useState('')

  const newLogin = (username, password) => {
    console.log(username)
    console.log(password)
  }

  let [authMode, setAuthMode] = useState("signin")
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const errorLogin = () => {
    var element = document.getElementById("error-label");
    // element.style.visibility = element.style.visibility === "visible" ? "hidden" : "visible"
    element.style.visibility = "visible"
  }
  
  if (authMode === "signin") {

    return (
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
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
            <p id="error-label" className="error-login">
              Username or password is incorrect
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
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
              type="name"
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
              value = {usernameInput}
              onChange={e => setUsernameInput(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value = {passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn-submit" onClick={() =>{
                newLogin(usernameInput, passwordInput);
                // navigate('/push');
            }}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
