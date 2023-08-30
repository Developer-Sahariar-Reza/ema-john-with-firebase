import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        alert("Login successful");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handleSignIn}>
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

      <p className="error-message">{error}</p>

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
