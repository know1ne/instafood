
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

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
          <h1>Sign Up</h1>
        </div>
        <div className="login_text">
          Already a member? <Link to="/login">Login</Link> here
        </div>
        <form className="login_form" onSubmit={handleSubmit}>
          {/* Signup Role Field */}
          <label htmlFor="role">Signup Role</label>
          <select
            name="role"
            id="role"
            className="form_input"
            value={userType}
            onChange={handleUserTypeChange}
            required
          >
            <option value="">Select User Type</option>
            <option value="customer">Customer</option>
            <option value="restaurant">Restaurant</option>
          </select>

          {/* Name Field */}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="form_input"
            required
          />

          {/* Phone Number Field */}
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="form_input"
            required
          />

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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
