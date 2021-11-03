import "./register.css"
import {Link } from 'react-router-dom';
import { useHistory} from "react-router-dom";
import { useState } from "react";


export default function Register() {

    let history = useHistory();
    const [details, setDetails] = useState({});


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setDetails(values => ({...values, [name]: value}))
                                      }


    const handleSubmit = (event) => {
        event.preventDefault();
        
         if (details.email==="admin@gmail.com"){
        alert("Admin User already exist. Login with the credentials");
         }
         else{
            alert("Proceed wth the Registration?");
            alert("User Registered. Login to get started")
            history.push('/')
        }
      }

    return (
        <div className="register">
      <span className="registerTitle">Register</span>

      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input name="email" value={details.email || ""} onChange={handleChange} className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton"> <Link to="/">Login </Link> </button>
    </div>
    );
}