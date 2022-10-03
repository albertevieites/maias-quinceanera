import React from "react";

import Layout from "../components/Layout";
import Finger from "../images/assets/finger.svg";

const Rsvp = () => {
  return (
    <div className="rsvp">
      <Layout>
      <div className="rsvp__container">
        <form
          id="form"
          name="rsvp"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <div className="rsvp__top">
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
          </div>

          <div className="rsvp__bottom">
            <h3>Please select one</h3>
            <fieldset>
              <label for="assist"></label>
                <input type="radio" name="radio" value="yes" /> I'm coming

              <label for="not"></label>
                <input type="radio" name="radio" value="no" /> Sorry, I cannot make it
            </fieldset>
          </div>

          <div class="rsvp__button">
            <Finger />
            <input type="submit" value="Let me know!" />
          </div>
        </form>
      </div>
      </Layout>
    </div>
  );
};

export default Rsvp;
