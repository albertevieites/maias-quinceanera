import React from "react";

import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <a href="#whats">What is it?</a>
          </li>
          <li>
            <a href="#plan">The Plan</a>
          </li>
          <li>
            <a href="#venue">Venue Details</a>
          </li>
          <Link to="/rsvp">RSVP</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
