
import React, { useState } from "react"
import "./Auth.css"
import App from "./App"; 
import { useNavigate } from 'react-router-dom';
import {createLogin} from './graphql/mutations';
import * as queries from './graphql/queries';
import  {API} from 'aws-amplify';

export default function (props) {

  const newLogin = async (e) => {
    e.preventDefault()
    const {target} = e

    console.log(target.nameInput.value)
    console.log(target.usernameInput.value)
    console.log(target.passwordInput.value)

    try{
      await API.graphql({
        query: createLogin,
        variable: {
          input: {
            name: target.nameInput.value,
            username: target.usernameInput.value,
            password: target.passwordInput.value
          },
        },
      })
      console.log('Successfully sent')
    }catch(e){
      console.log(e)
    }
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
      <form className="Auth-form" onSubmit={newLogin}>
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
              name = "nameInput"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              name = "usernameInput"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name = "passwordInput"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn-submit">
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
