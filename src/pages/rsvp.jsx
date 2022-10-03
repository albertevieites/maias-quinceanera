import React from "react";

import Layout from "../components/Layout";
import Finger from "../images/assets/finger.svg";

const Rsvp = () => {
  return (
    <div className="rsvp">
      <Layout>
      <div className="rsvp__container">
        <form
          name="rsvp maia"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="Contact" />
          <div className="rsvp__top">
            <h3>Please fill one per person</h3>
            <div className="rsvp__name">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
          </div>

          <div className="rsvp__bottom">
            <h3>Please select one</h3>
            <fieldset>
                <input type="radio" name="radio" value="yes" /> I'm coming

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
