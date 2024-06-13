// src/components/Sidebar.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../Styles/sidebar.css';

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="sidebar">
        <div className="logo py-4">
        <h3 className="logo-text"><img src="/logo.png" alt=""  />Enquiries</h3>
        </div>
          <ul>
          <li >         
            <Link to="/notification" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline "><img src="/notifications_active.svg " alt=""/>Notification</span>
              </Link>
          </li>
            <li><Link to="/" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/dashboard.svg " alt=""/>Dashboard</span>
              </Link></li>
            <li>
              <Link to="/enquiry" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/list_alt.svg " alt=""/>Enquiry</span>
              </Link>
            </li>
            <li><Link to="/consultations" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/groups.svg " alt=""/>Consultations</span>
              </Link>
            </li>
            <li><Link to="/orders" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/local_florist.svg " alt=""/>Orders</span>
              </Link></li>
            <li><Link to="/pricing" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/local_offer.svg " alt=""/>Pricing</span>
              </Link></li>
            <li><Link to="/proposal" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/notes.svg " alt=""/>Proposal</span>
              </Link></li>
            <li><Link to="/wholesale" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/spa.svg " alt=""/>Wholesale</span>
              </Link></li>
            <li><Link to="/production" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/local_florist (2).svg " alt=""/>Production</span>
              </Link></li>
            <li><Link to="/delivery" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/airport_shuttle.svg " alt=""/>Delivery</span>
              </Link></li>
            <li><Link to="/libraries" className="nav-link px-1 align-middle">
                <span className="ms-1 d-none d-sm-inline"><img src="/book-open (2).svg " alt=""/>Libraries</span>
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
