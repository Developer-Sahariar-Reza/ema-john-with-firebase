import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form>
        <div className="form-control">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="harrypotter@hogwarts.com"
            required
          />
        </div>

        <div className="form-control">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="your password"
            required
          />
        </div>

        <div className="form-control">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="your password"
            required
          />
        </div>

        <input type="submit" value="Sign Up" className="btn-submit" />
      </form>

      <p className="navigate">
        Already have an account? Please{" "}
        <Link className="navigate-link" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
