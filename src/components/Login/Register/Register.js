import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Register</h2>
        <form onSubmit="">
          <input type="email" name="" placeholder="Your email" />
          <br />
          <input type="password" name="" placeholder="Enter password" />
          <br />
          <input type="password" name="" placeholder="Re-enter Password" />
          <br />
          <button type="submit" className="btn-regular mt-3">
            Register
          </button>
          <br />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div>--------------or------------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
