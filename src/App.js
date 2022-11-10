import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePages/Home";
import LoginPage from "./pages/LoginPages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoginPage" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
