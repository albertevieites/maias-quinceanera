import React from "react";
import { Link } from "gatsby";

import girl from "../images/icons/girl.svg";
import plan from "../images/icons/plan.svg";
import venue from "../images/icons/venue.svg";
import reservation from "../images/icons/rsvp.svg";

const Scroll = () => {
  return (
    <div className="scroll">
      <nav>
        <ul>
          <a href="#whats">
            <img src={girl} alt="girl icon" />
            <li>What is it?</li>
          </a>

          <a href="#plan">
            <img src={plan} alt="girl icon" />
            <li>The Plan</li>
          </a>

          <a href="#venue">
            <img src={venue} alt="girl icon" />
            <li>Venue</li>
          </a>

          <Link to="/rsvp">
            <img src={reservation} alt="girl icon" />
            RSVP
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Scroll;
