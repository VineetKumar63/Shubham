// src/components/Sidebar.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../sidebar.css';

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="sidebar ">
        <h3>ENQUIRY</h3>
          <ul>
          <li>
          <Link to="/notification" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline ">Notification</span>
              </Link>
          </li>
            <li><Link to="/" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>
              </Link></li>
            <li>
              <Link to="/enquiry" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Enquiry</span>
              </Link>
            </li>
            <li><Link to="/consultations" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Consultations</span>
              </Link>
            </li>
            <li><Link to="/orders" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Orders</span>
              </Link></li>
            <li><Link to="/pricing" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Pricing</span>
              </Link></li>
            <li><Link to="/proposal" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Proposal</span>
              </Link></li>
            <li><Link to="/wholesale" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Wholesale</span>
              </Link></li>
            <li><Link to="/production" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Production</span>
              </Link></li>
            <li><Link to="/delivery" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Delivery</span>
              </Link></li>
            <li><Link to="/libraries" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline">Libraries</span>
              </Link></li>
          </ul>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
