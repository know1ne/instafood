import { useNavigate } from "react-router-dom";
import "./LandingPage.css";


const LandingPage = () => {
  const navigate = useNavigate();
  
  function redirectToParent() {
    navigate("order");
  }

  return (
    <div className="landing_container">
      <div className="landing_page">
        <h1>Welcome to InstaFood 2.0</h1>
        <p>Order delicious food from your favorite restaurants!</p>
        <button className="landing_btn" onClick={redirectToParent}>
          Order Now
        </button>
        </div>
    </div>
  );
};

export default LandingPage;
