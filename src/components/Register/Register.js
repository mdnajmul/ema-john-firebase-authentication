import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div className="container">
        <h2 className="text-center mb-3 mt-3">Register: Create Account</h2>
        <form onSubmit="">
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
            placeholder="Enter password"
          />
          <br />
          <input
            className="form-control"
            type="password"
            name=""
            placeholder="Re-enter Password"
          />
          <br />
          <div className="text-center">
            <button type="submit" className="btn-regular mt-3">
              Register
            </button>
          </div>
          <br />
        </form>
        <div className="text-center">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <div>--------------or------------</div>
          <button className="btn-regular">Google Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
