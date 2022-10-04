import React /* { useEffect }  */from "react";

import Layout from "../components/Layout";
import NavbarMobile from "../components/NavbarMobile";
import Finger from "../images/assets/finger.svg";

const Rsvp = () => {
  /* useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []) */

  return (
    <div className="rsvp">
      <NavbarMobile />
      <Layout>
      <div className="rsvp__container">
        <form
          name="form"
          action="https://getform.io/f/d68028be-bc9d-45f5-8919-411979ae2a90"
          method="POST"
        >

          <div className="rsvp__top">
            <h3>Please fill one per person</h3>
            <div className="rsvp__name">
              <input type="text" name="name" placeholder="Full Name" required />
            </div>
          </div>

          <div className="rsvp__bottom">
            <h3>Please select one</h3>
            <fieldset>
                <div className="rsvp__input"><input type="radio" name="attendance" value="Attending" /> I'm coming</div>

                <div className="rsvp__input"><input type="radio" name="attendance" value="Not Attending" /> Sorry, I cannot make it</div>
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