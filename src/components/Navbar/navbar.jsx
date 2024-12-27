import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-pink shadow p-2 sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/home">
           <h1>MarketZone</h1>
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page"  to='/home'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/cateogry'>
                categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/products'>
                 proudcts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
