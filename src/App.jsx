import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Parent from "./components/Parent/Parent"; // Assuming this is the correct import path
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/order" element={<Parent />} />
          <Route path="/navbar" element={<Navbar />} /> {/* Corrected path */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
