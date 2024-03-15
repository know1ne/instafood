import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Parent from "./components/Parent/Parent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/orderingoptions" element={<Parent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
