import { Route, Routes } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import About from "./pages/Home/About/About";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import SignUp from "./pages/Login/SignUp/SignUp";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
