import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  console.log("loginData", loginData);
  let updateLoginData = (event) => {
    setloginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Amigo')
  };

  // to navigate programatically useNavigate

  let navigateToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="container border mt-3">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={loginData.email}
            onChange={(event) => {
              updateLoginData(event);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={loginData.password}
            onChange={(event) => {
              updateLoginData(event);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <h4 style={{ cursor: "pointer" }} onClick={navigateToSignUp}>
          Don't have an account? Signup here !
        </h4>
      </form>
    </div>
  );
}

export default Login;
