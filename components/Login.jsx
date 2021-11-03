import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";

export default function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputs.email === "admin@gmail.com" && inputs.password === "admin") {
      dispatch(authActions.logIn());
      alert("Success");
      history.push("/home");
    } else {
      alert("Invalid Credentials. Retry again or Register");
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form onSubmit={handleSubmit} className="loginForm">
        <label>Email</label>
        <input
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}
