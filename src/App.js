import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
