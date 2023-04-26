
import React, {useEffect, useState } from "react"
import "./Auth.css"
import App from "./App"; 
import { useNavigate } from 'react-router-dom';
import {createLogin} from './graphql/mutations';
import {listLogins} from './graphql/queries';
import  {API, Amplify} from 'aws-amplify';

export default function (props) {

  const login = async (e) => {
    e.preventDefault()
    const {target} = e

    const loginData = await API.graphql({
      query: listLogins,
      variables: {
        filter: {
          username: {
            eq: target.usernameInput.value
          }
        }
      }
    })

    if(loginData.data.listLogins.items[0].password == target.passwordInput.value){
      console.log('Logged In');
      navigate('./push')
    }else{
      console.log('Wrong password')
      errorLogin()
    }
    

    console.log(loginData)
  }

  const newLogin = async (e) => {
    e.preventDefault()
    const {target} = e

    const loginData = await API.graphql({
      query: listLogins,
      variables: {
        filter: {
          username: {
            eq: target.usernameInput.value
          }
        }
      }
    })

    const exists = loginData.data.listLogins.items[0] == null

    console.log(exists)

    if(exists == false){
      console.log('Username already exists')
    }else{
      try{
        await API.graphql({
          query: createLogin,
          variables: {
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
        <form className="Auth-form" onSubmit={login}>
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
                name="usernameInput"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="passwordInput"
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
