import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import girl from "../images/icons/girl.svg";
import plan from "../images/icons/plan.svg";
import venue from "../images/icons/venue.svg";
import reservation from "../images/icons/rsvp.svg";
import home from "../images/icons/home.svg";

const Scroll = () => {
  const { pathname } = useLocation();

  return (
    <div className="scroll">
      <nav>
        <ul>
          <a href="#whats" style={pathname === "/" ? {} : { display: "none" }}>
            <img src={girl} alt="girl icon" />
            <li>What is it?</li>
          </a>

          <a href="#plan" style={pathname === "/" ? {} : { display: "none" }}>
            <img src={plan} alt="girl icon" />
            <li>The Plan</li>
          </a>

          <Link to="/">
            <img src={home} alt="girl icon" />
            Home
          </Link>

          <a href="#venue" style={pathname === "/" ? {} : { display: "none" }}>
            <img src={venue} alt="girl icon" />
            <li>Venue</li>
          </a>

          <Link to="/rsvp" style={pathname === "/" ? {} : { display: "none" }}>
            <img src={reservation} alt="girl icon" />
            RSVP
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Scroll;
