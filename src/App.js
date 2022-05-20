import { Route, Routes } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import About from "./pages/Home/About/About";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import SignUp from "./pages/Login/SignUp/SignUp";
import Navbar from "./pages/Shared/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments/MyAppointments";
import MyReview from "./pages/Dashboard/MyReview/MyReview";
import History from "./pages/Dashboard/History/History";
import AllUser from "./pages/Dashboard/AllUser/AllUser";
import RequireAdmin from "./pages/Login/RequireAdmin/RequireAdmin";
import AddDoctor from "./pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "./pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "./pages/Dashboard/Payment/Payment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="myreview" element={<MyReview />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="payment/:appointmentId" element={<Payment />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUser />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
