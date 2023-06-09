import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/add"} className="navbar-brand btn btn-success text-light">
            Add Contact
          </Link>
          <Link
            to={"/"}
            className="navbar-brand btn btn btn-success text-light"
          >
            Home
          </Link>
          <form className="d-flex" role="search">
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
      </nav>
    </div>
  );
};

export default NavBar;
