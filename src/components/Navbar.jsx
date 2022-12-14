import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <nav className="navbar">
        <ul
          className="navbar__list"
          style={pathname === "/" ? { width: "90%" } : { width: "100%" }}
        >
          <a href="#whats">
            <div>
              <li style={pathname === "/" ? { display: "block" } : { display: "none" }}>What is it?</li>
            </div>
          </a>

          <a href="#plan">
            <li style={pathname === "/" ? { display: "block" } : { display: "none" }}>The Plan</li>
          </a>

          <a href="#venue">
            <li
            style={pathname === "/" ? { display: "block" } : { display: "none" }}
            >Venue Details</li>
          </a>

          <Link to="/rsvp" style={pathname === "/" ? { display: "block" } : { display: "none" }}>RSVP</Link>

          <span
            className="navbar__home--link"
            style={pathname === "/" ? { width: "0" } : { width: "100%"} }
          >
            <Link
              to="/"
              style={pathname === "/" ? { display: "none" } : { display: "block", width: "100%", padding: "1em" }}
            >
            Maia's Quinceañera
          </Link>
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
