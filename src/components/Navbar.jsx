import React from "react";
import { useLocation } from "@reach/router";

import { Link } from "gatsby";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <div>
      <nav
        className="navbar"
        style={
          pathname === "/"
            ? { backgroundColor: "hsl(339, 81%, 85%" }
            : { backgroundColor: "hsl(177, 100%, 34%)" }
        }
      >
        <ul
          className="navbar__list"
          style={
            pathname === "/"
              ? { width: "90%" }
              : { width: "100%" }
          }
        >
          <a href="#whats">
            <div>
              <li>What is it?</li>
            </div>
          </a>

          <a href="#plan">
            <li>The Plan</li>
          </a>

          <a href="#venue">
            <li>Venue Details</li>
          </a>

          <Link to="/rsvp">RSVP</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
