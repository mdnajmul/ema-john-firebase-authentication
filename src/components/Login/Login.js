import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" name="" placeholder="Your email" />
          <br />
          <input type="password" name="" placeholder="password" />
          <br />
          <button className="btn-regular mt-3">Login</button>
          <br />
        </form>
        <p>
          new to ema-john? <Link to="/register">Create Account</Link>
        </p>
        <div>-------------or-------------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
