import React from "react";

import {  Link } from "react-router-dom";

const Navbar = function () {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#ffff"}}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/home" style={{color:"#2b6777",fontWeight:"bold",marginRight:"40px"}}>
          Admin dashbaord
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/sellerhome" style={{color:"#2b6777",fontWeight:"bold",marginRight:"40px"}}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/itemlist" style={{color:"#2b6777",fontWeight:"bold",marginRight:"40px"}}>
                All ietms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/additem"
                tabIndex="-1"
                aria-disabled="true"
              style={{color:"#2b6777" ,fontWeight:"bold",marginRight:"40px"}}>
                Add Ietms
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
