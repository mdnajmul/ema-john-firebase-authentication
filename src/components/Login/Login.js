import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-form">
      <div className="container">
        <h2 className="text-center mb-3 mt-3">Login</h2>
        <form>
          <input
            className="form-control"
            type="email"
            name=""
            placeholder="Your email"
          />
          <br />
          <input
            className="form-control"
            type="password"
            name=""
            placeholder="password"
          />
          <br />
          <div className="text-center">
            <button className="btn-regular mt-3">Login</button>
          </div>
          <br />
        </form>
        <div className="text-center">
          <p>
            new to ema-john? <Link to="/register">Create Account</Link>
          </p>
          <div>-------------or-------------</div>
          <button onClick={signInUsingGoogle} className="btn-regular">
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
