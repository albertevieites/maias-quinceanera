import React from "react";

import Layout from "../components/Layout";
import Finger from "../images/assets/finger.svg";

const Rsvp = () => {
  return (
    <div className="rsvp">
      <Layout>
      <div className="rsvp__container">
        <form
          name="contact v1"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >

          <div className="rsvp__top">
            <h3>Please fill one per person</h3>
            <div className="rsvp__name">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
          </div>

          <div className="rsvp__bottom">
            <h3>Please select one</h3>
            <fieldset>
                <input type="radio" name="attendance" value="Attending" /> I'm coming

                <input type="radio" name="attendance" value="Not Attending" /> Sorry, I cannot make it
            </fieldset>
          </div>

          <div class="rsvp__button">
            <Finger />
            <button type="submit" >Let me know!</button>
          </div>
        </form>
      </div>
      </Layout>
    </div>
  );
};

export default Rsvp;