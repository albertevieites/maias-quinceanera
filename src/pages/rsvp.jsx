import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Rsvp = () => {
  return (
    <div className="rsvp">
      <Navbar />
      <form
        id="form"
        name="rsvp"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <h3>Please fill one per person</h3>
        <input
          type="hidden"
          name="access_key"
          value="8120b10c-514e-48af-88ed-f7830d8d79f4"
        />

        <div className="rsvp__name">
          <label for="name">
          <input type="text" name="name" placeholder="Your Name" required />
          </label>
        </div>

        <h3>Please select one</h3>
        <fieldset>
          <label>
            <input type="radio" name="radio" value="yes" /> I'm coming
          </label>
          <label>
            <input type="radio" name="radio" value="no" /> Sorry, I cannot make it
          </label>
        </fieldset>

        <div class="rsvp__button">
          <StaticImage src="../images/icons/finger.png" alt="finger icon" />
          <input type="submit" value="Let me know!" />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Rsvp;
