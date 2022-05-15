import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile py-4">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl text-purple-700 text-center">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments </Link>
          </li>
          <li>
            <Link to="/dashboard/myreview">My Reviews </Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History </Link>
          </li>
          <li>
            <Link to="/dashboard/users">All Users </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
