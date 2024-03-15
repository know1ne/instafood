import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  function redirectToParent() {
    navigate("orderingoptions");
  }

  return (
    <>
      <div className="landing_container">
        <h1>Welcome to InstaFood 2.0</h1>
        <p>Order delicious food from your favorite restaurants!</p>
        <button className="landing_btn" onClick={() => redirectToParent()}>
          Order Now
        </button>
      </div>
    </>
  );
};

export default LandingPage;
