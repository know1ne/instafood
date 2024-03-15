import { Link } from "react-router-dom";
import "./Signup.css";


const Signup = () => {


  return (
    <>
      <div className="signup_container">
        <div className="signup_main">
          <div className="signup_grid">
            <h1>Sign Up</h1>
          </div>
          <div className="signup_text">
            Already amember? <Link to="/login">Login</Link> here
            <div/>
            <div className="signup_form">
              <label htmlFor="role">Signup Role</label>
              <select name="role" id="role" className="form_select" aria-label='Disbaled select example'>
                <option selected>Selected User Type</option>

              </select>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
