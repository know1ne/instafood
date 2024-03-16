import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
  };

  return (
    <div className="login_container">
      <div className="login_main">
        <div className="login_grid">
          <h1>Login</h1>
        </div>
        <div className="login_text">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link> here
        </div>
        <form className="login_form" onSubmit={handleSubmit}>
          {/* Email Field */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form_input"
            required
          />

          {/* Password Field */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form_input"
            required
          />

          {/* Forgot Password Link */}
          <Link to="/forgot-password">Forgot Password?</Link>

          {/* Submit Button */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
