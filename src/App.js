import { Route, Routes } from "react-router-dom";
import About from "./pages/Home/About/About";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
