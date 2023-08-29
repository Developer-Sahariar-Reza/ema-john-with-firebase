import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password !== confirm) {
      setError("Your Password didn't match");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
            name="confirm"
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

      <p className="error-message">{error}</p>
    </div>
  );
};

export default Register;
