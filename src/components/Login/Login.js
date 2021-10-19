import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
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
          <button onClick={handleGoogleSignIn} className="btn-regular">
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
