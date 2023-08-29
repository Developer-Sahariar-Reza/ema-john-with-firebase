import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
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

        <input type="submit" value="Log In" className="btn-submit" />
      </form>

      <p className="navigate">
        New to Ema-John?{" "}
        <Link className="navigate-link" to="/signup">
          Create an Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
