import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-white border-bottom">
      <div class="container mx-5">
        <Link class="navbar-brand ms-5" to="/">
          <img src="media/images/logo.svg" style={{ width: "150px" }}></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item mx-3 p-1">
                <Link class="nav-link " aria-current="page" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li class="nav-item mx-3 p-1">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item mx-3 p-1">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item mx-3 p-1">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item me-5 p-1">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
