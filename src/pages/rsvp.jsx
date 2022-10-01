import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Rsvp = () => {
  return (
    <div>
      <Navbar />
      <form
        id="form"
        name="rsvp"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <h3 class="contact__title">Contact me</h3>

        <input
          type="hidden"
          name="access_key"
          value="8120b10c-514e-48af-88ed-f7830d8d79f4"
        />

        <div class="contact__data">
          <label for="name">
          <input type="text" name="name" placeholder="Full Name" required />
          </label>
        </div>

        <fieldset>
          <label>
            <input type="radio" name="radio" value="yes" /> I'm coming
          </label>
          <label>
            <input type="radio" name="radio" value="no" /> Sorry, I cannot make it
          </label>
        </fieldset>

        <div class="contact__button">
          <input type="submit" value="Send it" />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Rsvp;
